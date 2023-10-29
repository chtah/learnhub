import { Layout, Menu } from 'antd'
import classes from './CourseReactHandOn.module.css'
import { useState } from 'react'

const { Sider, Content } = Layout

const CourseReactHandOn = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('item0')

  const componentSwitch = (key: string) => {
    switch (key) {
      case 'document':
        return (
          <div className={classes.documentContent}>
            <h1>🔗 รวมลิ้งค์ต่างๆที่ใช้ในงาน React hands on</h1>
            <p>
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Fdrive%2Ffolders%2F1Yd__wYjudP_PkfWxOiTqMCJWIARICWBC%3Ffbclid%3DIwAR2eRtkYGCFo5MO8zcTSEnq46JGCAeON7s4g3ZmlmGVs4bCPO6kBipx34MM&h=AT26618Tj4dTs1yCeM6sMWQ51JNMPMQpe7wj16Mr1meiLrzljZ0TjEqBXGeK_q81EWnRDBFn6VRDVRcngfLktoNeURY-WTKv1ZXqK1ufOpe-FLjinIZ2PsMYB7LIefXxQxZq&__tn__=-UK-R&c[0]=AT1gmbc6_3Xa8y7QJHfoAEb6wUliAAS1v0B3TiHdM3qH4OknZlTBymRqM7uCREfSutQgAyc69sG7vqljwSxu3tlrZ65rm7sciqd8ZtEqoHGgXdK-mKreQQYZ2yrUna_g-xfs03yy9WYNP_eHPS78gyLKgHGWqShOtMCjs10GzJ2EAAJKCs2ko8j3YZG5WOVue72kjZTY3IEOQUnGUuGiqIovkvnOaA5agZY"
                target="_blank"
                rel="noreferrer noopener"
              >
                🖹 Slide ของทุก session
              </a>
            </p>
            <p>
              React hands on Joy UI.pdf&nbsp;
              <a
                href="https://drive.google.com/file/d/1iR90U7JxTl0q52aelCzBbXGbB8fabqN0/view?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
              >
                Link
              </a>
            </p>
            <p>
              React hands on Joy UI.Key&nbsp;
              <a
                href="https://drive.google.com/file/d/1-i4lB2juJLub7xoHAcDfosgxk0PsU_qS/view?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
              >
                Link
              </a>
            </p>
            <p>
              React hooks slide&nbsp;
              <a
                href="https://docs.google.com/presentation/d/1j27WkJ7_xm_bL-FBdfUn-JOli_hL3MQ3TAwFeJtu16E/edit?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
              >
                Link
              </a>
            </p>
            <p>
              React on the Server.pdf&nbsp;
              <a
                href="https://drive.google.com/file/d/1fNjCdvs2EstZZhgfuWvIaAalwE6AvxsI/view?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
              >
                Link
              </a>
            </p>
            <p>
              React on the Server Slide&nbsp;
              <a
                href="https://docs.google.com/presentation/d/1cvdT6y2f-iQnQqmWizXrWYxtNRlvmGkJcuGIKVI89kg/edit?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
              >
                Link
              </a>
            </p>
            <div>
              <h3>🎥 Joy UI</h3>
              <p>
                📦 Playground&nbsp;
                <a
                  href="https://codesandbox.io/s/cranky-allen-wkqql7?file=/index.tsx"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Link
                </a>
              </p>
              <p>
                🚀 Open for contributors&nbsp;
                <a href="https://github.com/siriwatknp/joy-treasury/" target="_blank" rel="noreferrer noopener">
                  https://github.com/siriwatknp/joy-treasury/
                </a>
              </p>
            </div>

            <div>
              <h3>🎥 React hooks</h3>
              <p>
                👩‍💻&nbsp;
                <a href="https://github.com/mameaw14/react-hooks/tree/main" target="_blank" rel="noreferrer noopener">
                  https://github.com/mameaw14/react-hooks/tree/main
                </a>
              </p>
            </div>

            <div>
              <h3>🎥 React on the server</h3>
              <p>
                👨‍💻&nbsp;
                <a href="https://github.com/devpeerapong/react-on-the-server" target="_blank" rel="noreferrer noopener">
                  https://github.com/devpeerapong/react-on-the-server
                </a>
              </p>
            </div>
          </div>
        )

      case 'item1':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0wObA-MM9-0-iPag?e=cbEeJa" allowFullScreen></iframe>
          </div>
        )

      case 'item2':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0xdLxAPWLUYYeEhg?e=JrsGOj" allowFullScreen></iframe>
          </div>
        )

      case 'item3':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0yoxkt9Lp7GZ1rDg?e=PZg8kQ" allowFullScreen></iframe>
          </div>
        )

      default:
        break
    }
  }

  return (
    <div>
      <Layout>
        <Sider width={400} className={classes.sider}>
          <Menu mode="inline" onClick={(e) => setSelectedMenuItem(e.key)} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="document">Document</Menu.Item>
            <Menu.SubMenu title="Live Records">
              <Menu.Item key="item1">React Hands On</Menu.Item>
              <Menu.Item key="item2">The World of React Hooks</Menu.Item>
              <Menu.Item key="item3">React on the Server</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Content
          className={classes.content}
          style={{
            padding: 24,
            margin: 0,
          }}
        >
          <div className={classes.contentTitle}></div>
          <div>{componentSwitch(selectedMenuItem)}</div>
        </Content>
      </Layout>
    </div>
  )
}

export default CourseReactHandOn
