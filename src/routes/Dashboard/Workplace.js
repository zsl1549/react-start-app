import React from 'react';
import { Row, Col, Card, List, Avatar } from 'antd';
import {router} from "dva";

import EditableLinkGroup from '@/components/EditableLinkGroup';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './Workplace.less';

const { Link } = router;


const links = [
  {
    title: '操作一',
    href: '',
  },
  {
    title: '操作二',
    href: '',
  },
  {
    title: '操作三',
    href: '',
  },
  {
    title: '操作四',
    href: '',
  },
  {
    title: '操作五',
    href: '',
  },
  {
    title: '操作六',
    href: '',
  },
];

const members = [
  {
    id: 'members-1',
    title: '科学搬砖组',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    link: '',
  },
  {
    id: 'members-2',
    title: '程序员日常',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
    link: '',
  },
  {
    id: 'members-3',
    title: '设计天团',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
    link: '',
  },
  {
    id: 'members-4',
    title: '中二少女团',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
    link: '',
  },
  {
    id: 'members-5',
    title: '骗你学计算机',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
    link: '',
  },
];

const Workplace = () => {
  const pageHeaderContent = (
    <div className={styles.pageHeaderContent}>
      <div className={styles.avatar}>
        <Avatar
          size="large"
          src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>早安，曲丽丽，祝你开心每一天！</div>
        <div>交互专家 | 蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</div>
      </div>
    </div>
  );

  const extraContent = (
    <div className={styles.extraContent}>
      <div className={styles.statItem}>
        <p>项目数</p>
        <p>56</p>
      </div>
      <div className={styles.statItem}>
        <p>团队内排名</p>
        <p>
          8<span> / 24</span>
        </p>
      </div>
      <div className={styles.statItem}>
        <p>项目访问</p>
        <p>2,223</p>
      </div>
    </div>
  );

  return (
    <PageHeaderLayout content={pageHeaderContent} extraContent={extraContent}>
      <Row gutter={24}>
        <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          <Card
            className={styles.projectList}
            style={{ marginBottom: 24 }}
            title="进行中的项目"
            bordered={false}
            extra={<Link to="/">全部项目</Link>}
            bodyStyle={{ padding: 0 }}
          >
            Card
          </Card>
          <Card
            bodyStyle={{ padding: 0 }}
            bordered={false}
            className={styles.activeCard}
            title="动态"
          >
            <List size="large">
              <div className={styles.activitiesList}>动态</div>
            </List>
          </Card>
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{ marginBottom: 24 }}
            title="快速开始 / 便捷导航"
            bordered={false}
            bodyStyle={{ padding: 0 }}
          >
            <EditableLinkGroup onAdd={() => {}} links={links} linkElement={Link} />
          </Card>
          <Card bodyStyle={{ paddingTop: 12, paddingBottom: 12 }} bordered={false} title="团队">
            <div className={styles.members}>
              <Row gutter={48}>
                {members.map(item => (
                  <Col span={12} key={`members-item-${item.id}`}>
                    <Link to={item.link}>
                      <Avatar src={item.logo} size="small" />
                      <span className={styles.member}>{item.title}</span>
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </PageHeaderLayout>
  );
}
export default Workplace;
