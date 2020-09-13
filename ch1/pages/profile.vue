<template>
    <div>
        <v-container>
            <v-card style="margin-bottom:20px">
                <v-container>
                    <v-subheader>내 프로필</v-subheader>
                </v-container>
                <v-form>
                    <v-text-field label="닉네임" required />
                </v-form>
                <v-btn color="blue" type="submit">수정</v-btn>
            </v-card>
            <v-card style="margin-bottom:20px;">
                <v-container>
                    <v-subhead>팔로잉</v-subhead>
                    <follow-list></follow-list>
                </v-container>
            </v-card> 
            <v-card style="margin-bottom:20px;">
                <v-container>
                    <v-subhead>팔로워</v-subhead>
                    <follow-list></follow-list>
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import FollowList from '~/components/FollowList';
export default {
    //layout:'admin',
     components:{
        FollowList,
    },
    data() {
        return {
            name: 'Nuxt.js',
        }
    },
    head() {
        return {
            title: '프로필'
        }
    }
}
</script>

<style scoped>

</style>