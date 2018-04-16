import React from 'react';

// Layout
import Layout from 'layout/layout';

class HomeComponent extends React.Component {
  render() {
    return (
      <Layout
        title="Home"
        description="Home description"
      >
        <h2>Home</h2>

        <div className="wrapper">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              Column 1

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quisquam magni expedita fugiat commodi provident fuga error autem tenetur, minus, molestiae iusto! Ducimus fugit vero hic praesentium rem veniam possimus.</p>
            </div>
            <div className="col-xs-12 col-md-6">
              Column 2

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quisquam magni expedita fugiat commodi provident fuga error autem tenetur, minus, molestiae iusto! Ducimus fugit vero hic praesentium rem veniam possimus.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quisquam magni expedita fugiat commodi provident fuga error autem tenetur, minus, molestiae iusto! Ducimus fugit vero hic praesentium rem veniam possimus.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quisquam magni expedita fugiat commodi provident fuga error autem tenetur, minus, molestiae iusto! Ducimus fugit vero hic praesentium rem veniam possimus.</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default HomeComponent;
