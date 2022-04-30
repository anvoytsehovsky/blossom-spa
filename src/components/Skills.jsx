import React from 'react'
import styled from 'styled-components'
import Title from './Title'

const Skills = () => {
  const skillsData = [
    {
      name: "Facial",
      amount: 75,
    },
    {
      name: "Skin",
      amount: 50,
    },
    {
      name: "SPA",
      amount: 90,
    },
    {
      name: "Cosmetic",
      amount: 70,
    },
    {
      name: "Salon",
      amount: 90,
    },
  ]
  return (
	<Section id='skills'>
    <Title value="skills" />
    <div className="skills__title">
      <p>Our Skills</p>
      <h2>Check our super awesome skills</h2>
    </div>
    <div className="skills">
      <div className="skills__bars">
        {
          skillsData.map(({name, amount}) => {
            return (
              <div className="skills__bars__bar" key={name}>
                <div className="container">
                  <progress value={amount} max="100" />
                  <span>{name}</span>
                </div>
                <h3>{amount}%</h3>
              </div>
            )
          })
        }
      </div>
      <div className="skills__content">
        <p className="title">
          Beauty Services and Products
        </p>
        <p className="description">
          To be a successful beautician, you should have a wide range 
          of skills in beauty services, good communication skills, 
          and the ability to advise clients on suitable hairstyles.
        </p>
      </div>
    </div>
  </Section>
  )
}

const Section = styled.section`
  min-height: 100vh;
  height: 140vh;
  background-color: var(--secondary-color);
  .sideTitle {
    h1 {
      color: #fff;
      font-size: 9rem;
      z-index: 10;
    }
  }
  .skills__title {
    padding: 6rem 10rem;
    p {
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: var(--primary-color);
    }
    h2 {
      color: #fff;
      font-size: 2rem;
    }
  }
  .skills {
    display: flex;
    padding: 0 5rem 0 20rem;
    gap: 10rem;
    &__bars {
      transform: rotate(-90deg);
      width: max-content;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      &__bar {
        display: flex;
        flex-direction: row-reverse;
        gap: 1rem;
        .container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          span {
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            color: var(--primary-color);
          }
          progress {
            width: 30rem;
            -webkit-appearance: none;
            appearance: none;
            &::-webkit-progress-bar {
              height: 3rem;
              background-color: var(--primary-color);
              border-radius: 20px;
            }
            &::-webkit-progress-value {
              background-color: #fff; 
              border-radius: 20px;
            }
          }
        }
        h3 {
          transform: rotate(90deg);
          color: #fff;
          font-size: 2rem;
        }
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: #fff;
      z-index: 2;
    }
  }
`

export default Skills