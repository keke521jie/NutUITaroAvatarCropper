import { View } from "@tarojs/components";
import { Cell, Avatar, AvatarCropper as NutAvatarCropper } from "@nutui/nutui-react-taro";
import { useState } from "react";

function AvatarCropper() {
  const [imageUrl, setImageUrl] = useState(
    "https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
  );
  const cutImage = (data: any) => {
    setImageUrl(data);
  };
  return (
    <View className="nutui-react-demo">
      <NutAvatarCropper onConfirm={cutImage}>
        <Avatar size="large" src={imageUrl} />
      </NutAvatarCropper>
    </View>
  );
}

export default AvatarCropper;
