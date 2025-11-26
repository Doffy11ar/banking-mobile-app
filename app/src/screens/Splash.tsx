import  {useEffect} from 'react';
import { 
    View, 
    Image, 
    StyleSheet
} from 'react-native';

const Splash = ({ onFinish }: { onFinish:() => void }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 5000);
        return () => clearTimeout(timer);
    },[onFinish] );
    return (
        <View style={styles.container}>  
            <Image
                source={require('../assets/Images/Main_logo.png')}
                style={styles.logo}
                resizeMode='contain'
            />
        </View>
    );
};

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(29, 190, 155, 1)',
        },
        logo: {
            width: 200,
            height: 200,
        },
    });

   export default Splash; 