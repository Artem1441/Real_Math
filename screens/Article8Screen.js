import { View, Text, Image, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import BackBtn from '../components/BackBtn';
import styles from './styles';

const Article8Screen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
            <BackBtn navigation={navigation} />
            <ScrollView>
                <View style={styles.titleView}><Text style={styles.title}>Степень 2</Text></View>

                <View style={styles.imgView}>
                    <Image
                        source={require("../assets/item8.jpg")}
                        style={styles.imgArticle}
                    />
                </View>

                <View style={styles.subtitleView}><Text style={styles.title}>Насколько же большое число 2 в n степени?</Text></View>

                <View style={styles.text}><Text>Согласно одной из легенд, шахматы придумал мудрец по имени Сисса, который показал своё изобретение правителю страны. Тому так понравилась игра, что он дал изобретателю право самому выбрать награду. Мудрец попросил у короля за первую клетку шахматной доски заплатить ему одно зерно пшеницы, за вторую — два, за третью — четыре и так далее, удваивая количество зёрен на каждой следующей клетке. Правитель, не разбиравшийся в математике, быстро согласился, даже несколько обидевшись на столь невысокую оценку изобретения, и приказал казначею подсчитать и выдать изобретателю нужное количество зерна. Однако, когда неделю спустя казначей всё ещё не смог подсчитать, сколько нужно зёрен, правитель спросил, в чём причина такой задержки. Казначей показал ему расчёты и сказал, что расплатиться невозможно, разве только осушить моря и океаны и засеять всё пространство пшеницей.</Text></View>

                <View style={styles.imgView}>
                    <Image
                        source={require("../assets/example82.jpg")}
                        style={styles.imgArticle}
                    />
                </View>

                <View style={styles.text}><Text>
                    Количество зерна примерно в 1800 раз превышает мировой урожай пшеницы за год (в 2008/09 аграрном году урожай составил 686 млн тонн[1]), то есть превышает весь урожай пшеницы, собранный за всю историю человечества. Количество зёрен составляет примерно 0,0031 % числа Авогадро. В единицах массы: если принять, что одно зёрнышко пшеницы имеет массу 0,065 грамма (Troy grain тройское зерно: 1 gr = 0,06479891 гран), тогда общая масса пшеницы на шахматной доске составит 1200 миллиардов тонн или 1,2 триллиона тонн:
                </Text></View>


                <View style={styles.imgView}>
                    <Image
                        source={require("../assets/example83.jpg")}
                        style={styles.imgArticle}
                    />
                </View>

                <View style={styles.text}><Text>
                    Это вот такое вот число: 18 446 744 073 709 551 615
                </Text></View>

                <View style={styles.subtitleView}><Text style={styles.title}>А каков из этого вывод? Не ведитесь на всякие МММ, где тебе обещают миллионы из ничего</Text></View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Article8Screen