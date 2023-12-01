export interface LoginDTO {
  username: string
  password: string
}

export interface CredentialDTO {
  accessToken: string
}

export interface userDataDTO {
  id: string
  username: string
  name: string
  registeredAt: string
}

export interface courseDTO {
  id: number
  course_name: string
  course_update_date: string
  menu: [
    {
      id: number
      menu_title: string
      submenu: [
        {
          id: number
          submenu_title: string
          topic: [
            {
              id: number
              topic_title: string
              topic_description: string
              topic_url: string
            },
          ]
        },
      ]
    },
  ]
}
