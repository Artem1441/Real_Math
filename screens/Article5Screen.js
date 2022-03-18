import { View, Text, Image } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import BackBtn from '../components/BackBtn';
import styles from './styles';

const Article5Screen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
            <BackBtn navigation={navigation} />

            <View style={styles.titleView}><Text style={styles.title}>Дедукция или индукция?</Text></View>

            <View style={styles.imgView}>
                <Image
                    source={require("../assets/item5.jpg")}
                    style={styles.imgArticle}
                />
            </View>

            <View style={styles.text}><Text>Текст</Text></View>
        </SafeAreaView>
    )
}

export default Article5Screen