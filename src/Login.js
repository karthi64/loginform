import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [email_error, setEmail_error] = useState('');
    const [password, setPassword] = useState('');
    const [password_error, setPassword_error] = useState('');
    const [error, setError] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const validate = () => {
        let errors = {};
    
        if (!email) {
            setEmail_error("Email is required")
            //errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            //error.email = 'Email is invalid';
            setEmail_error("Email is invalid")
        }else{
            setEmail_error('')
        }
    
        if (!password) {
            setPassword_error("Password is required")
            //errors.password = 'Password is required';
        } else if (password.length < 8) {
            //errors.password = 'Password must be at least 8 characters';
            setPassword_error('Password must be at least 8 characters')
        }
        if (email === 'papu.jennifer34@gmail.com' && password === 'password') {
            navigation.navigate('Logout');
          }
          else{return Object.keys(errors).length === 0;}
    
        setError(errors);
        
    };

    const handleReset = () => {
        setEmail('');
        setPassword('');
        setEmail_error('');
        setPassword_error('');
      };

      const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };

    return (
        <KeyboardAwareScrollView style={styles.scrollview}>
        <ScrollView style={styles.scrollview}>
            <View style={styles.containermain}>
                <View style={styles.container}>
                    <Text style={styles.header}>ADMIN LOGIN</Text>

                    {/* {/ *************************    MAIL ID    ********************* /} */}

                    <Text style={styles.label}>Mail ID</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Email"
                        keyboardType="email-address"
                        placeholderTextColor={'#6B728E'}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    {/* {/ {error.email && <Text style={styles.error}>{error.email}</Text>} /} */}
                    {email_error?
                    <Text style={{color:"#DF2E38", marginTop: -10, marginHorizontal: 10, marginBottom: 5}}>{email_error}</Text>
                    :null}

                    {/* {/ *************************    PASSWORD    ********************* /} */}

                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        placeholderTextColor={'#6B728E'}
                        secureTextEntry={!passwordVisible}
                        value={password}
                        onChangeText={setPassword}

                    />
                    <TouchableOpacity 

                    onPress={togglePasswordVisibility}
                    style={styles.iconButton}
                    >
                        <Icon name={passwordVisible ? 'eye-slash' : 'eye'}size={20} color="#000" />
                    </TouchableOpacity>
                    </View>
          
                    {/* {/ {error.password && <Text style={styles.error}>{error.password}</Text>} /} */}
                    {email_error?
                    <Text style={{color:"#DF2E38", marginTop: -10, marginHorizontal: 10}}>{password_error}</Text>
                    :null}

                    {/* {/ *************************    LOGIN BUTTON    ********************* /} */}
                    
                    <TouchableOpacity onPress={() => validate()}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0.5 }}
                            colors={['#98EC2D', '#17AD37']}
                            style={styles.linearGradient}>
                            <Text style={styles.buttonText}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    {/* {/ *************************    RESET BUTTON    ********************* /} */}

                    <TouchableOpacity onPress={handleReset}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0.5 }}
                            colors={['#98EC2D', '#17AD37']}
                            style={styles.linearGradient}>
                            <Text style={styles.buttonText}>Reset</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: '#201a30',
        width: '100%',
    },
    containermain: {
        flex: 1,
        backgroundColor: '',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        padding: '15%',
        marginTop: '40%',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        margin: '5%',
        borderRadius: 20,
    },
    header: {
        fontFamily: 'serif',
        color: '#000',
        fontWeight: '900',
        fontSize: 25,
        textAlign: 'center',
        paddingBottom: 40,
    },
    label: {
        fontFamily: 'serif',
        fontSize: 15,
        paddingBottom: 15,
        paddingHorizontal: 10,
        color: '#000',
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        backgroundColor: '#f2f2f2',
        marginBottom: 20,
        paddingHorizontal: 15,
        fontFamily: 'serif',
        borderRadius: 20,
        borderWidth: 1,
        color: '#000',
        borderColor: '#6B728E',
    },
    iconButton:{

        position: 'absolute',
        right: 9,
        height: 25,
        width: 25,
        marginTop: 10,
    },
    /* buttonContainer: {
      backgroundColor: '#3f51b5',
      paddingVertical: 10,
      borderRadius: 20,
      marginTop: 10,
    }, */
    linearGradient: {
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'serif',
    },
    error: {
        color: 'red',
        fontFamily: 'serif',
        marginTop: -15,
        marginBottom: 5,
        paddingHorizontal: 10,
    },
});

export default Login;