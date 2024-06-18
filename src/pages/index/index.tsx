import React from 'react'
import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import './index.scss'
import Taro from '@tarojs/taro'

function Index() {
  return (
    <View className="nutui-react-demo">
      <View className="index">
        欢迎使用 NutUI React 开发 Taro 多端项目。
      </View>
      <View className="index">
        <Button type="primary" className="btn" onClick={()=>{
          Taro.navigateTo({
            url:'/pages/avatarCropper/AvatarCropper'
          })
        }}>
          NutUI React Button
        </Button>
      </View>
    </View>
  )
}

export default Index
