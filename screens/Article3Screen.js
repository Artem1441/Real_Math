import { View, Text, Image, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import BackBtn from '../components/BackBtn';
import styles from './styles';

const Article3Screen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
            <BackBtn navigation={navigation} />

            <ScrollView>
                <View style={styles.titleView}><Text style={styles.title}>Как делить будем? Поровну или по-честному?</Text></View>
                <View style={styles.imgView}>
                    <Image
                        source={require("../assets/item3.jpg")}
                        style={styles.imgArticle}
                    />
                </View>

                <View style={styles.subtitleView}><Text style={styles.title}>Иногда возникает вопрос: как делить неделимое?</Text></View>

                <View style={styles.text}><Text>Часто нам приходится делить 8 кусков пиццы на 3 человек. и хорошо, если кто-то откажется. А если нет? Как быть? Здесь нам на помощь приходит математика</Text></View>

                <View style={styles.imgView}>
                    <Image
                        source={require("../assets/example32.jpg")}
                        style={styles.imgArticle}
                    />
                </View>

                <View style={styles.text}><Text>Идут 2 путника по дороге. У них на двоих 8 пирожков: у первого 5 пирожков, у второго 3. На пути у них появляется турист, который просит у ребят поесть. Разделили они 8 пирожков на 3 (похоже по 2.66666... на каждого). После еды старец отблагодарил их и дал 8 золотых монет. И тут встал вопрос: как их разделить, чтобы было честно?</Text></View>

                <View style={styles.imgView}>
                    <Image
                        source={require("../assets/example33.jpg")}
                        style={styles.imgArticle}
                    />
                </View>

                <View style={styles.text}><Text>Второй решил схитрить и предложил другу поделить монеты пополам. Но Первый путник понял подвох и сказал, что раз у него было 5 пирожков, то и полчить он должен 5 монет, а другу отдать 3. Казалось бы, всё честно? Или нет? Побудьте судьёй и ответьте на вопрос: а честное ли произошло распределение монет?</Text></View>

                <View style={styles.imgView}>
                    <Image
                        source={require("../assets/example34.jpg")}
                        style={styles.imgArticle}
                    />
                </View>

                <View style={styles.text}><Text>И нет, никто из них не прав. Представим, 8 целых пирожков как 24 части (по 3 части в пирожке). Тогда у певрого было 5*3 = 15 кусочков, а у второго 3*3 = 9 кусочков. Тогда, чтобы разделить по-ровну на 3: первый отдал 7 кусочков, а второй 1 кусок. И у всех по 8 кусочков. Но первый отдал 7, а второй 1. Тогда правильнее будет разделить 8 монет так: 7 монет первому путнику, а одну монету второму. Вот такая вот задача!</Text></View>

                <View style={styles.subtitleView}><Text style={styles.title}>Если вы решили также - у вас потрясающее чувство справеливости, основанное на фактах. Поздравляем! </Text></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Article3Screen