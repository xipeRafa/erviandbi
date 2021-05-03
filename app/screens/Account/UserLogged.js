import { View, Text, Button } from "react-native";


export default function UserLogged() {

  return (
    <View>
        <Text>UserLogged...</Text>

        <Button title="cerrar sesion" onPress={() => firebase.auth().signOut()} />
    </View>
  );
}

