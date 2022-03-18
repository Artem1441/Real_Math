import { View, Text, Image } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import BackBtn from '../components/BackBtn';
import styles from './styles';

const Article4Screen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
            <BackBtn navigation={navigation} />

            <View style={styles.titleView}><Text style={styles.title}>Понимаем ли мы вероятность?</Text></View>

            <View style={styles.imgView}>
                <Image
                    source={require("../assets/item4.jpg")}
                    style={styles.imgArticle}
                />
            </View>

            <View style={styles.text}><Text>Текст</Text></View>
        </SafeAreaView>
    )
}

export default Article4Screen