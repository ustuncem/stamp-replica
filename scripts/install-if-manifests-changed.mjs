import { execSync } from "node:child_process";

const MANIFEST_PATTERNS = [/^package\.json$/, /^yarn.lock$/];

const hasOrigHead = (() => {
	try {
		execSync("git rev-parse --verify ORIG_HEAD", { stdio: "ignore" });
		return true;
	} catch {
		return false;
	}
})();

if (!hasOrigHead) {
	console.log("No ORIG_HEAD found, skipping dependency sync.");
	process.exit(0);
}

const changedFilesOutput = execSync("git diff --name-only ORIG_HEAD HEAD", {
	encoding: "utf8",
}).trim();

if (!changedFilesOutput) {
	console.log("No files changed between ORIG_HEAD and HEAD.");
	process.exit(0);
}

const changedFiles = changedFilesOutput.split("\n");
const hasManifestChanges = changedFiles.some((filePath) =>
	MANIFEST_PATTERNS.some((pattern) => pattern.test(filePath)),
);

if (!hasManifestChanges) {
	console.log(
		"No dependency manifest changes detected, skipping yarn install.",
	);
	process.exit(0);
}

console.log("Dependency manifest changes detected, running yarn install...");
execSync("yarn install", { stdio: "inherit" });
