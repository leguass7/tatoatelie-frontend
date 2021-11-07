import {
  // Account,
  Profile
  //SignInEventMessage
} from 'next-auth'

// export async function instagramEventSignIn(message: SignInEventMessage): Promise<void> {
//   console.log('instagram signIn message', message)
// }

export interface InstagramProfile extends Profile {
  id: string
  username: string
  account_type: 'BUSINESS' | 'MEDIA_CREATOR' | 'PERSONAL'
  media: {
    data: any[]
  }
}

export interface ResponseInstagram {
  seo_category_infos: string[][]
  graphql: {
    user: {
      biography?: string
      external_url?: string
      fbid?: string
      edge_followed_by: {
        count: number
      }
      edge_follow: {
        count: number
      }
      full_name: string
      is_private: boolean
      is_verified: boolean
      profile_pic_url: string
      profile_pic_url_hd: string
      username: string
      business_email?: string
    }
  }
}

// export async function instagramCallbackSignIn(
//   user: User,
//   account: Account,
//   profile: InstagramProfile
// ): Promise<boolean> {
//   // console.log('instagramCallbackSignIn profile', profile)
//   // try {
//   //   const data = profile?.media?.data
//   //   if(data){
//   //     data.map(m => console.log('media', m))
//   //   }
//   // } catch (error) {
//   //   console.log('instagramCallbackSignIn error ', error)
//   // }

//   return true
// }
