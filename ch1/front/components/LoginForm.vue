<template>
    <v-container>
        <v-card>
            <v-form v-model="valid" @submit.prevent="onSubmitForm">
                <v-container> 
                    <v-text-field label="이메일" type="email" v-model="email" :rules="emailRules" required></v-text-field>
                </v-container>
                
                <v-container>
                    <v-text-field label="비밀번호" type="password" v-model="password" :rules="passwordRules" required></v-text-field>
                </v-container>
                <v-btn color="green" type="submit" :disabled="!valid">로그인</v-btn>
                <v-btn nuxt to="/sign">회원가입</v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            valid: false,
            email: '',
            emailRules:[
                v => !!v || '이메일은 필수입니다.',
                v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.',
            ],
            password: '',
            passwordRules:[
                v => !!v || '닉네임은 필수입니다.',
            ],
        }
    },
    methods:{
        onSubmitForm(){
            alert('oo');
        }
    }
}
</script>