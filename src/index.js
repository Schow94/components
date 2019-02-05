import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './components/ApprovalCard';


import UserDetail from './components/UserDetail';

const App = () => {
  return (
    <div>
      <div className="ui container comments">
        
          <ApprovalCard>Are you sure you want to exit the page?</ApprovalCard>
          <ApprovalCard>
            <UserDetail 
              author="Sam"
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
          <ApprovalCard>
            <UserDetail 
              author="Jane" 
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
          <ApprovalCard>
            <UserDetail 
              author="Kevin"         
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
          <ApprovalCard>
            <UserDetail 
              author="Michelle" 
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
          <ApprovalCard>
            <UserDetail 
              author="Troy" 
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
        </div>
        
        <form class="ui reply form">
          <div class="field">
            <textarea></textarea>
          </div>
        </form>
    </div>
    
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));