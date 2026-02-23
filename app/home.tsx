import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    // _layout.tsx will auto-redirect to /login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>👋</Text>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.email}>{user?.email}</Text>

      <TouchableOpacity style={styles.btn} onPress={handleLogout}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#F3F4F6",
  },
  emoji: { fontSize: 56, marginBottom: 8 },
  title: { fontSize: 28, fontWeight: "800", color: "#111827" },
  email: { fontSize: 15, color: "#6B7280", marginBottom: 40 },
  btn: {
    backgroundColor: "#EF4444",
    borderRadius: 12,
    paddingHorizontal: 40,
    paddingVertical: 16,
  },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
