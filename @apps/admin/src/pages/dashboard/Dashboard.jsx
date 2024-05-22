import './Dashboard.less'
import SearchBar from '@/components/common/input/SearchBar';
import Block from '@/components/layout/Block';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left-top">
        <Block><SearchBar /></Block>
      </div>
      <div className="right-top">Right Top content</div>
      <div className="left-content">Left Content</div>
      <div className="right-content">Right Content</div>
    </div>
  );
}

export default Dashboard;