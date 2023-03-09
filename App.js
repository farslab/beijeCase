import * as React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const w = Dimensions.get("window").width;

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand: require("./assets/fonts/Quicksand.ttf"),
    QuicksandRegular: require("./assets/fonts/Quicksand-Regular.ttf"),
    QuicksandMedium: require("./assets/fonts/Quicksand-Medium.ttf"),
    QuicksandSemiBold: require("./assets/fonts/Quicksand-SemiBold.ttf"),
    QuicksandBold: require("./assets/fonts/Quicksand-Bold.ttf"),
    QuicksandLight: require("./assets/fonts/Quicksand-Light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 40, flexDirection: "row", alignItems: "top" }}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.logoHeader}
            source={require("./assets/beijelogo.png")}
          />
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 24 }}
        >
          <TouchableOpacity>
            <Ionicons
              name="cart-outline"
              size={31}
              style={{ paddingLeft: 17 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="person-outline"
              size={26}
              style={{ paddingLeft: 17 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="menu-outline"
              size={35}
              style={{ paddingHorizontal: 17, paddingRight: 15 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={{}}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Kendi Paketini Oluştur</Text>
          <Text style={styles.subtitle}>
            Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
            miktarlardan, sana özel bir paket oluşturalım.
          </Text>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <View
              style={{
                width: w / 1.15,
                display: "flex",
                backgroundColor: "#262626",
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
                marginHorizontal: 25,
              }}
            >
              <Text
                style={{
                  fontFamily: "QuicksandSemiBold",
                  color: "#c4c4c4",
                  fontSize: 24,
                }}
              >
                Paketini Gör
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View></View>
          <Image
            style={[styles.logoFooter, { alignSelf: "center" }]}
            source={require("./assets/beijelogowhite.png")}
          />

          <Text
            style={{
              fontFamily: "QuicksandSemiBold",
              color: "#b5b5b5",
              fontSize: 24,
              alignSelf: "center",
            }}
          >
            Arayı Açmayalım!
          </Text>
          <Text
            style={{
              fontFamily: "QuicksandSemiBold",
              color: "#b5b5b5",
              fontSize: 16,
              textAlign: "center",
              marginTop: 9,
              width: w,
            }}
          >
            Aylık e-gazetemiz döngü, yeni ürün ve gelişmelerden haberdar ol.
          </Text>
          <TextInput
            style={{
              height: 40,
              fontSize: 20,
              borderRadius: 10,
              padding: 20,
              width: w / 1.17,
              fontFamily: "Quicksand",
              marginVertical: 15,
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: "#c5c5c5",
              alignSelf: "center",
            }}
            placeholder="e-mail adresin"
            placeholderTextColor={"#c5c5c5"}
          />

          <TouchableOpacity>
            <View
              style={{
                width: w / 1.17,
                display: "flex",
                backgroundColor: "#b5b5b5",
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
                marginHorizontal: 25,
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "QuicksandSemiBold",
                  color: "#262626",
                  fontSize: 24,
                }}
              >
                Gönder
              </Text>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "QuicksandSemiBold",
              color: "#b5b5b5",
              fontSize: 14,
              textAlign: "center",
              alignSelf: "center",
              marginTop: 18,
              width: w / 1.09,
            }}
          >
            Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve
            beije'den haber almayı onaylıyorum.
          </Text>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 20,
              paddingVertical: 40,
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: "QuicksandSemiBold",
                  color: "#b5b5b5",
                  fontSize: 19,
                }}
              >
                Paketler
              </Text>
              <Text
                style={{
                  fontFamily: "QuicksandSemiBold",
                  color: "#b5b5b5",
                  fontSize: 19,
                  marginVertical: 10,
                }}
              >
                Deneme Paketi
              </Text>
              <Text
                style={{
                  fontFamily: "QuicksandSemiBold",
                  color: "#b5b5b5",
                  fontSize: 19,
                  marginBottom: 10,
                }}
              >
                Ekibimize Katıl
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: "QuicksandSemiBold",
                  color: "#b5b5b5",
                  fontSize: 19,
                }}
              >
                Blog
              </Text>
              <Text
                style={{
                  fontFamily: "QuicksandSemiBold",
                  color: "#b5b5b5",
                  fontSize: 19,
                  marginVertical: 10,
                }}
              >
                S.S.S
              </Text>
              <Text
                style={{
                  fontFamily: "QuicksandSemiBold",
                  color: "#b5b5b5",
                  fontSize: 19,
                  marginBottom: 10,
                }}
              >
                Biz Kimiz?
              </Text>
            </View>
          </View>
          <View
            style={{
              flexGrow: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              width: w / 1.3,
              alignSelf: "center",
              paddingBottom: 35,
              borderBottomColor: "#b4b4b4",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          >
            <TouchableOpacity>
              <Ionicons
                name="logo-facebook"
                size={27}
                style={{}}
                color="#b4b4b4"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="logo-instagram"
                size={28}
                style={{}}
                color="#b4b4b4"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="logo-twitter"
                size={30}
                style={{}}
                color="#b4b4b4"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="logo-linkedin"
                size={26}
                style={{}}
                color="#b4b4b4"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="logo-rss" size={26} style={{}} color="#b4b4b4" />
            </TouchableOpacity>
          </View>
          <View />
          <Text
            style={{
              fontFamily: "QuicksandBold",
              color: "#b4b4b4",
              fontSize: 19,
              textAlign: "center",
              marginTop: 25,
              width: w,
            }}
          >
            2023 beije. Tüm hakları saklıdır.
          </Text>
          <Text
            style={{
              fontFamily: "QuicksandSemiBold",
              color: "#b4b4b4",
              fontSize: 16,
              textAlign: "center",
              marginTop: 20,
              width: w,
            }}
          >
            KVKK Aydınlatma Metni
          </Text>
          <Text
            style={{
              fontFamily: "QuicksandSemiBold",
              color: "#b4b4b4",
              fontSize: 16,
              textAlign: "center",
              marginTop: 20,
              width: w,
            }}
          >
            Üyelik Sözleşmesi
          </Text>
          <Text
            style={{
              fontFamily: "QuicksandSemiBold",
              color: "#b4b4b4",
              fontSize: 16,
              textAlign: "center",
              marginTop: 20,
              width: w,
            }}
          >
            Gizlilik Politikası
          </Text>
          <Text
            style={{
              fontFamily: "QuicksandSemiBold",
              color: "#b4b4b4",
              fontSize: 16,
              textAlign: "center",
              marginTop: 20,
              width: w,
            }}
          >
            Çerez Politikası
          </Text>
          <Text
            style={{
              fontFamily: "QuicksandSemiBold",
              color: "#b4b4b4",
              fontSize: 16,
              textAlign: "center",
              marginTop: 20,
              marginBottom: 30,
              width: w,
            }}
          >
            Test Sonuçları
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F5F2",
    flex: 1,
  },
  logoHeader: {
    resizeMode: "contain",
    width: 80,
    height: 90,
    marginStart: 25,
  },
  logoFooter: {
    resizeMode: "contain",
    width: 80,
    height: 90,
    alignItems: "center",
  },
  title: {
    fontFamily: "QuicksandSemiBold",
    fontSize: 31,
  },
  subtitle: {
    fontFamily: "Quicksand",
    fontSize: 18,
    marginVertical: 20,
    lineHeight: 26,
  },
  titleView: {
    padding: 20,
    alignItems: "center",
  },
  footer: {
    backgroundColor: "#262626",
    flex: 1,
  },
});
