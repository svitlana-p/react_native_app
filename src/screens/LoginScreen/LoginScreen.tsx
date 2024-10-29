import { Button, View, Text, TextInput } from "react-native";
import { Controller, useForm } from "react-hook-form";
import {styles} from './LoginScreen.style'
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { hide, show } from "../../store/loading/loading.actions";
import { Loading } from "../../components/Loading/Loading";

type FormData = {
  email: string;
  password: string;
};

export const LoginScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const dispatch = useDispatch()
  const onSubmit = (data: FormData) => {
    const userData = {
      email: data.email,
      password: data.password,
      photo: '',
    };

    dispatch(show())
    setTimeout(()=>{
      dispatch(hide())
      dispatch(login(userData))
    }, 1000)
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email is required",
          pattern: {
            value: new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
            message:'Enter valid email'
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'#cdcdd1'}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email && <Text style={{color:'red'}}>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="password"
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
           style={styles.input}
            placeholder="Password"
            placeholderTextColor={'#cdcdd1'}
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.password && <Text style={{color:'red'}}>{errors.password.message}</Text>}
      <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleSubmit(onSubmit)} color={styles.button.color}/>
      </View>
      <Loading/>
    </View>
  );
};
