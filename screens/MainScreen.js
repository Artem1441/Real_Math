import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import styles from './styles';

const MainScreen = ({ navigation }) => {
    const Article = ({ id, title }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(`Article${id}Screen`)}>
                <View style={styles.item}>
                    <Image
                        source={id === 1 ? require("../assets/item1.jpg") : id === 2 ? require("../assets/item2.jpg") : id === 3 ? require("../assets/item3.jpg") : id === 4 ? require("../assets/item4.jpg") : id === 5 ? require("../assets/item5.jpg") : id === 6 ? require("../assets/item6.jpg") : id === 7 ? require("../assets/item7.jpg") : id === 8 ? require("../assets/item8.jpg") : null}
                        style={styles.img}
                    />
                    <View style={styles.item_info}>
                        <Text style={styles.title}>{id}. {title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
            <ScrollView>
                <Article id={1} title={"Почему самолёты летают не по прямой"} />
                <Article id={2} title={"Ошибка выжевшего"} />
                <Article id={3} title={"Поровну или по-честному?"} />
                <Article id={4} title={"Понимаем ли мы вероятность?"} />
                <Article id={5} title={"Дедукция или индукция?"} />
                <Article id={6} title={"Интегралы в жизни... нужны?"} />
                <Article id={7} title={"Алгоритм Луна"} />
                <Article id={8} title={"Степень 2"} />
            </ScrollView>
        </SafeAreaView>

    )
}

export default MainScreen