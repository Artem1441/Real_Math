import { View, Text, Image } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import BackBtn from '../components/BackBtn';
import styles from './styles';

const Article6Screen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
            <BackBtn navigation={navigation} />

            <View style={styles.titleView}><Text style={styles.title}>Интегралы в жизни... нужны?</Text></View>

            <View style={styles.imgView}>
                <Image
                    source={require("../assets/item6.jpg")}
                    style={styles.imgArticle}
                />
            </View>

            <View style={styles.text}><Text>Текст</Text></View>
        </SafeAreaView>
    )
}

export default Article6Screen