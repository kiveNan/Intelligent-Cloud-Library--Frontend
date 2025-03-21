import { defineStore } from "pinia";
import { ref } from "vue";
import {getLoginUserUsingGet} from "@/api/yonghumokuai";

/**
 * 存储登录用户信息的状态
 */
export const useLoginUserStore = defineStore("loginUser", () => {
  const loginUser = ref<API.LoginUserVO>({
    userName: "未登录",
  });

  /**
   * 远程获取登录用户信息
   */
  async function fetchLoginUser() {
      // 测试用户登录，3 秒后登录
      // setTimeout(() => {
      //   loginUser.value = { userName: '测试用户', id: 1 }
      // }, 3000)
    const res = await getLoginUserUsingGet();
    if (res.data.code === 0 && res.data.data) {
      loginUser.value = res.data.data;
    }
  }

  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser;
  }

  return { loginUser, setLoginUser, fetchLoginUser };
});
