import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Image } from "expo-image";
import catsImage from "./assets/cats.png";

console.log(catsImage);

export default function App() {
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.navigation}>
          <Pressable>
            <Text style={styles.navtext}>Home</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.navtext}>Gallery</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.navtext}>Cats</Text>
          </Pressable>
        </View>

        <View style={styles.main}>
          <View
            style={{
              flexDirection: isLandscape ? "row" : "column",
              maxWidth: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                // width: isLandscape ? "50%" : "100%",
                flex: isLandscape ? 1 : undefined,
              }}
            >
              <Text style={styles.heading}>Gipsy & Ginger</Text>
              <Text style={styles.subheading}>
                Get to know my furry friends 🩶🩶
              </Text>
              <Text style={styles.infoText}>
                Gipsy and Ginger are both British Shorthair and almost five
                years old. Gipsy is quit and a loner, while Ginger is always
                looking for attention and is very clumsy. Both cats are very
                sweet with kids and never bite or scratch on purpose. Both are a
                little bit crazy and always, absolutely ALWAYS hungry. But we
                love them very much, because they are part of our family. 🩶
              </Text>
            </View>

            <View>
              <Image source={catsImage} style={{ width: 300, height: 200 }} />
            </View>
          </View>
          <Pressable style={styles.gallery}>
            <Text style={styles.galleryText}>Go to Gallery</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Text>Datenschutz</Text>
          <Text>Impressum</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBC7C9",
    justifyContent: "space-between",
  },
  main: {
    flex: 1,
  },

  navigation: {
    backgroundColor: "#BC7B77",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navtext: {
    fontSize: 20,
    color: "#E1DCE0",
  },
  heading: {
    fontSize: 30,
    margin: 10,
  },

  subheading: {
    fontSize: 20,
    margin: 10,
  },
  infoText: {
    fontSize: 17,
  },

  gallery: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#9E9B98",
    margin: 20,
    padding: 10,
    backgroundColor: "#BC7B77",
  },
  galleryText: {
    fontSize: 17,
    color: "#E1DCE0",
  },
  footer: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
  },
});
