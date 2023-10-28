import { Layout, Menu } from 'antd'
import classes from './CourseCleverse.module.css'
import { useState } from 'react'

const { Sider, Content } = Layout

const CourseCleverse = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('item0')

  const componentSwitch = (key: string) => {
    switch (key) {
      case 'item0':
        return (
          <div className={classes.videoContent}>
            <h1>Welcome</h1>
          </div>
        )

      case '11sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxpZ-F3diRS9B5nxg?e=6ShjSX" allowFullScreen></iframe>
          </div>
        )
      case '12sepmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxoMCPYOMJoOWrdUQ?e=RVFfya" allowFullScreen></iframe>
          </div>
        )
      case '12sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxqkVWBn-HRRUuKKQ?e=PRCPhu" allowFullScreen></iframe>
          </div>
        )
      case '13sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxv6uRZq9WtyuwjwA?e=tcoexJ" allowFullScreen></iframe>
          </div>
        )
      case '14sepmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxrxJE-s3uZc8N7yQ?e=WZmajJ" allowFullScreen></iframe>
          </div>
        )
      case '14sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxsamwAr48tBnmISw?e=ePdFUK" allowFullScreen></iframe>
          </div>
        )
      case '15sep1':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxuT-irNx6edWACCA?e=nJEk7J" allowFullScreen></iframe>
          </div>
        )
      case '15sep2':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxtMKqHwgnlVwgAyQ?e=KnVcM7" allowFullScreen></iframe>
          </div>
        )
      case '15sep3':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxxcFixOe0NcN3SiQ?e=5xMWbh" allowFullScreen></iframe>
          </div>
        )
      case '15sep4':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxwjEdpvH4mri_coA?e=dMKHNB" allowFullScreen></iframe>
          </div>
        )
      case '15sep5':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxy9XUGHZB9HxjqpA?e=QR14Op" allowFullScreen></iframe>
          </div>
        )
      case '15sep6':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxz1QxmcFX7e-Pvgw?e=aSvjMP" allowFullScreen></iframe>
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
            <Menu.SubMenu title="Week 1">
              <Menu.SubMenu title="11-SEP">
                <Menu.Item key="11sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="12-SEP">
                <Menu.Item key="12sepmor">Morning</Menu.Item>
                <Menu.Item key="12sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="13-SEP">
                <Menu.Item key="13sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="14-SEP">
                <Menu.Item key="14sepmor">Morning</Menu.Item>
                <Menu.Item key="14sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="15-SEP">
                <Menu.Item key="15sep1">Part 1 - No.6 Solution</Menu.Item>
                <Menu.Item key="15sep2">Part 2 - No.12 Solution</Menu.Item>
                <Menu.Item key="15sep3">Part 3 - No.14 Solution</Menu.Item>
                <Menu.Item key="15sep4">Part 4 - No.18 Solution</Menu.Item>
                <Menu.Item key="15sep5">Part 5 - No.21 Solution</Menu.Item>
                <Menu.Item key="15sep6">Part 6 - No.1 Medium Solution</Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.SubMenu title="Week 2">
              <Menu.Item key="item2">xx</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Week 3">
              <Menu.Item key="item3">xx</Menu.Item>
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
          <div className={classes.contentTitle}>
            <p>Full Screen by right click on video and selected -Show all controls-</p>
          </div>
          <div>{componentSwitch(selectedMenuItem)}</div>
        </Content>
      </Layout>
    </div>
  )
}

export default CourseCleverse
