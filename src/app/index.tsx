import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { Camera } from "@/stamper";

export default function Index() {
	const { t } = useTranslation();

	return (
		<View>
			<Text>{t((key) => key.camera)}</Text>
			<Camera />
		</View>
	);
}
