import { View, Text, Image } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import BackBtn from '../components/BackBtn';
import styles from './styles';

const Article1Screen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
            <BackBtn navigation={navigation} />

            <View style={styles.titleView}><Text style={styles.title}>Почему самолёты летают не по прямой</Text></View>

            <View style={styles.imgView}>
                <Image
                    source={require("../assets/item1.jpg")}
                    style={styles.imgArticle}
                />
            </View>

            <View style={styles.text}><Text>lorem ipsum</Text></View>
        </SafeAreaView>
    )
}

export default Article1Screen