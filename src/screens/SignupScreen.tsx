import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-ionicons';
import CheckBox from '@react-native-community/checkbox';
import {images} from '../constants/images';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteStackParamList} from '../../App';

const SignupScreen = () => {
  const [username, setUsername] = useState('Pengguna Justip');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigation<StackNavigationProp<RouteStackParamList>>();
  const handleSignin = () => {
    navigate.navigate('SigninScreen');
  };

  const handleSignup = () => {
    navigate.navigate('SigninScreen');
  };

  const handleBack = () => {
    navigate.goBack();
  };

  return (
    <SafeAreaView className="font-rubik" style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFF" />

      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon name="chevron-back-outiline" size={24} color="#0F172A" />
        </TouchableOpacity>
        <Text className="font-rubik" style={styles.headerTitle}>
          daftar
        </Text>
      </View>

      <View style={styles.content}>
        <Text className="font-rubik" style={styles.welcomeTitle}>
          Buat Akun
        </Text>
        <Text className="font-rubik" style={styles.welcomeSubtitle}>
          Tolong isi data anda dengan lengkap untuk menyelesaikan pendaftaran
        </Text>

        <View style={styles.form}>
          <TextInput
            className="font-rubik"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Pengguna Justip"
          />

          <TextInput
            className="font-rubik"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Masukkan Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            className="font-rubik"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Masukkan NIK"
            secureTextEntry
          />

          <TextInput
            className="font-rubik"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Masukkan Nomor Telepon"
            secureTextEntry
          />

          <TextInput
            className="font-rubik"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Masukkan Password"
            secureTextEntry
          />

          <TouchableOpacity onPress={handleSignup} style={styles.signinButton}>
            <Text style={styles.signinButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleButton}>
            <Image source={images.google} style={styles.googleIcon} />
            <Text style={styles.googleButtonText}>Sign In With Google</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.registerContainer}>
        <Text style={styles.noAccountText}>sudah mempunyai akun? </Text>
        <TouchableOpacity onPress={handleSignin}>
          <Text style={styles.registerText}>masuk</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#F8FAFC',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#0F172A',
    marginRight: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 8,
    // marginHorizontal: 25,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#868D95',
    marginBottom: 40,
    // marginLeft: 25,
    marginRight: 110,
  },
  form: {
    width: '100%',
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 18,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    // marginHorizontal: 25,
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    // marginHorizontal: 25,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 8,
  },
  rememberText: {
    marginRight: 8,
    color: '#828A89',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '500',
  },
  signinButton: {
    height: 56,
    backgroundColor: '#1F6F8B',
    borderRadius: 18,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 16,
    // marginHorizontal: 25,
  },
  signinButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 2,
    paddingHorizontal: 26,
    textAlign: 'center',
  },
  googleButton: {
    height: 56,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  googleButtonText: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '500',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 40,
  },
  noAccountText: {
    fontSize: 14,
    color: '#64748B',
  },
  registerText: {
    fontSize: 14,
    color: '#1F6F8B',
    fontWeight: '500',
  },
});
