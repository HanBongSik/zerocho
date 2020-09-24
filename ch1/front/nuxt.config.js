module.exports = {
    head:{
        title: 'NodeBird',
        meta: [
            // hid는 유니크한 식별자입니다. `vmid`를 여기에 사용하지 마세요.
            {
              hid: '유니크한 아이디',
              name: '설명',
              content: '내가 커스텀한 설명',
            }
        ]
    }, 
    modules: [
        '@nuxtjs/vuetify',
    ],
    vuetify: {
        
    }
}