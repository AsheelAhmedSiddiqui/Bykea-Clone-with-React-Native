import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
// import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BaseNavigationContainer } from "@react-navigation/native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const SCREEN_HEIGHT = Dimensions.get("screen").height;

export default function RootLayout() {
	// const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			{/* header style */}
			<View style={styles.header}>
				<MaterialIcons name="menu" size={24} color="black" />
				<Text style={styles.logo}>BYKEA</Text>
				<MaterialIcons name="phone-callback" size={24} color="black" />
			</View>
			{/* Banner Design */}
			<View style={styles.bannerImageBox}>
				<Image
					style={styles.bannerImage}
					source={{
						uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQzwjbXzb6hQYGnitjGce_YfI0YY6e6yTzg&s",
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		height: 60,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		backgroundColor: "#fff",
		color: "red",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4.84,

		elevation: 4,
	},
	logo: {
		fontSize: 24,
	},
	bannerImageBox: {
		height: SCREEN_HEIGHT / 4,
		padding: 15,
		backgroundColor: "#eee",
		borderRadius: 20,
		margin: 10,
	},
	bannerImage: {
		height: "100%",
		borderRadius: 20,
		resizeMode: "cover",
	},
});
