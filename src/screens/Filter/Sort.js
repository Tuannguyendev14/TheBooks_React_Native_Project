import React, {Component} from 'react';

class Sort extends Component {
  state = {
    sorters: this.props.sorters,
  };

  data = [
    {
      id: 0,
      name: 'Vernon Dunham',
      company: 'Qualcore',
      email: 'vernon.dunham@qualcore.com',
    },
    {
      id: 1,
      name: 'Dori Neal',
      company: 'Sunopia',
      email: 'dori.neal@sunopia.com',
    },
    {
      id: 2,
      name: 'Rico Muldoon',
      company: 'Airconix',
      email: 'rico.muldoon@airconix.com',
    },
    {
      id: 3,
      name: 'Jason Neal',
      company: 'Qualcore',
      email: 'jason.neal@qualcore.com',
    },
    {
      id: 4,
      name: 'Rico Pettey',
      company: 'Thermolock',
      email: 'rico.pettey@thermolock.com',
    },
    {
      id: 5,
      name: 'Raymond Seabury',
      company: 'Airconix',
      email: 'raymond.seabury@airconix.com',
    },
    {
      id: 6,
      name: 'Dori Pettey',
      company: 'Hivemind',
      email: 'dori.pettey@hivemind.com',
    },
    {
      id: 7,
      name: 'Vernon Neal',
      company: 'Qualcore',
      email: 'vernon.neal@qualcore.com',
    },
    {
      id: 8,
      name: 'Jason Neal',
      company: 'Qualcore',
      email: 'jason.neal@qualcore.com',
    },
    {
      id: 9,
      name: 'Vernon Muldoon',
      company: 'Airconix',
      email: 'vernon.muldoon@airconix.com',
    },
    {
      id: 10,
      name: 'Vernon Seabury',
      company: 'Hivemind',
      email: 'vernon.seabury@hivemind.com',
    },
    {
      id: 11,
      name: 'Dori Neal',
      company: 'Airconix',
      email: 'dori.neal@airconix.com',
    },
    {
      id: 12,
      name: 'Raymond Pettey',
      company: 'Airconix',
      email: 'raymond.pettey@airconix.com',
    },
    {
      id: 13,
      name: 'Rico Muldoon',
      company: 'Qualcore',
      email: 'rico.muldoon@qualcore.com',
    },
    {
      id: 14,
      name: 'Vernon Seabury',
      company: 'Sunopia',
      email: 'vernon.seabury@sunopia.com',
    },
    {
      id: 15,
      name: 'Rico Pettey',
      company: 'Airconix',
      email: 'rico.pettey@airconix.com',
    },
    {
      id: 16,
      name: 'Jason Dunham',
      company: 'Sunopia',
      email: 'jason.dunham@sunopia.com',
    },
    {
      id: 17,
      name: 'Vernon Neal',
      company: 'Qualcore',
      email: 'vernon.neal@qualcore.com',
    },
    {
      id: 18,
      name: 'Jason Pettey',
      company: 'Thermolock',
      email: 'jason.pettey@thermolock.com',
    },
    {
      id: 19,
      name: 'Vernon Dunham',
      company: 'Thermolock',
      email: 'vernon.dunham@thermolock.com',
    },
  ];

  static defaultProps = {
    sorters: [
      {
        property: 'name',
      },
      {
        property: 'company',
      },
    ],
  };

  componentDidMount() {}

  parseData(data) {
    const {sorters} = data;

    if (data && data.length) {
      if (Array.isArray(sorters) && sorters.length) {
        data.sort(createSorter(...sorters));
      }
    }

    return data;
  }

  onLoad = data => {
    this.setState({
      data: this.parseData(data),
    });
  };

  render() {
    const {data} = this.state;

    return data ? this.renderData(data) : this.renderLoading();
  }

  renderData(data) {
    if (data && data.length > 0) {
      console.log(data);

      return (
        <div>
          {data.map(item => (
            <div key={item.id}>
              <a href={`mailto:${item.email}`}>{item.name}</a> {item.company}
            </div>
          ))}
        </div>
      );
    } else {
      return <div>No items found</div>;
    }
  }

  renderLoading() {
    return <div>Loading...</div>;
  }
}

export default Sort;
