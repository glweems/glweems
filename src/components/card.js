import PropTypes from 'prop-types';
import React from 'react';
import Theme, { MQ } from 'src/Theme';
import styled from 'styled-components';
// *:nth-last-child(1):nth-child(odd) { grid-column: 1 /-1; }
export const CardGrid = styled.div`
  max-width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  justify-items: center;
  /* background: ${Theme.colors.light}; */
  ${MQ.mobileL(`grid-template-columns: repeat(2, 1fr); gap: 1rem 1rem;`)}
  ${MQ.tablet(`grid-template-columns: repeat(3, 1fr); gap: 1rem;`)}
  ${MQ.laptop(`grid-template-columns: repeat(4, 1fr); gap: 1.5rem;`)}
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  background: white;
  flex-basis: 100%;
  margin-bottom: 1rem;

  ${MQ.mobileL(`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  margin: 0;
  `)}
`;

const Img = styled.img`
  width: 100%;
`;
const Body = styled.div`
  padding: 1rem;
`;

const Title = styled.h4`
  font-family: ${Theme.fontFamily.header};
  width: 100%;
`;

const Card = props => {
  const { img, body, title } = props;
  return (
    <Div>
      <Img src={img} />
      <Body>
        <Title>{title}</Title>
        {body}
      </Body>
    </Div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  body: PropTypes.string,
  title: PropTypes.string,
};

export default Card;

/*
export default class card extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
*/
