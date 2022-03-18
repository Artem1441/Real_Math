import { TouchableOpacity, Text } from 'react-native'

const BackBtn = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={{ fontSize: 32, fontWeight: "900", textAlign: "right", marginRight: 5, marginTop: 5 }}>X</Text></TouchableOpacity>
    )
}

export default BackBtn

