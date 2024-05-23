import './Dashboard.less'
import SearchBar from '@/components/common/input/SearchBar';
import Block from '@/components/layout/Block';
import Subtitle from '@/components/common/text/Subtitle';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left-top">
        <Block><SearchBar /></Block>
      </div>
      <div className="right-top">asdasd</div>
      <div className="left-content"><Block><Subtitle title="Recently edited" /></Block></div>
      <div className="right-content">Right Content</div>
    </div>
  );
}

export default Dashboard;