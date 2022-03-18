import { View, Text, Image, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import BackBtn from '../components/BackBtn';
import styles from './styles';

const Article2Screen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
            <BackBtn navigation={navigation} />

            <ScrollView>
                <View style={styles.titleView}><Text style={styles.title}>Ошибка выжевшего</Text></View>
                <View style={styles.imgView}>
                    <Image
                        source={require("../assets/item2.jpg")}
                        style={styles.imgArticle}
                    />
                </View>

                <View style={styles.subtitleView}><Text style={styles.title}>... или почему надо пристёгиваться</Text></View>

                <View style={styles.text}><Text>Во времена второй мировой войны у военных стоял важный вопрос укрепления самолета дополнительной броней. Нужно было выбрать ту его часть, укрепление которой в разы повысит количество самолетов, которые вернутся на базу. Военные полагали, что укрепить нужно фюзеляж, ведь именно он был наиболее поврежден на вернувшихся из боя самолетах. Пробоин же в части, где располагался двигатель, практически не было.</Text></View>

                <View style={styles.imgView}>
                    <Image
                        source={require("../assets/example22.jpg")}
                        style={styles.imgArticle}
                    />
                </View>

                <View style={styles.text}><Text>Учитывая тему статьи, не удивительно, что на помощь военным пришли математики. Изучая места пробоин вернувшихся самолетов, Абрахам Вальд рекомендовал укрепить те части, на которых меньше всего пробоин. Для военных такое решение казалось, мягко говоря, странным. Однако оно было основано на простом утверждении: самолеты, которые получают повреждения в этих местах, просто не долетают на базу.</Text></View>

                <View style={styles.imgView}>
                    <Image
                        source={require("../assets/example23.jpg")}
                        style={styles.imgArticle}
                    />
                </View>

                <View style={styles.text}><Text>Может показаться что математика здесь вовсе и не причем. Но даже если вы посмотрите на заметки Вальда — вы убедитесь, что математика еще как причем. Да и именно математика научила его задавать правильные вопросы: “Из каких предположений мы исходим? Обоснованны ли они?”</Text></View>

                <View style={styles.subtitleView}><Text style={styles.title}>Если кто-то на скорости 100+ км/ч вылетел из авто и выжил, то это "нужно ездить без ремня", а "ему очень повезло, а мне в 99 случаев из 100 не повезёт"</Text></View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Article2Screen
