import {
  AiOutlineDollarCircle,
  AiOutlineTeam,
  AiOutlineUnlock,
  AiOutlineDesktop,
  AiOutlineApartment,
  AiOutlineSetting
} from 'react-icons/ai';

import styled, { css, StyledProp } from '@eduzz/houston-styles';
import Grid from '@eduzz/houston-ui/Grid';
import Typography from '@eduzz/houston-ui/Typography';

const { Container } = Grid;

function HomeCategories({ className }: StyledProp) {
  const categories = [
    {
      label: 'Finanças',
      icon: <AiOutlineDollarCircle />
    },
    {
      label: 'Área de Membros',
      icon: <AiOutlineTeam />
    },
    {
      label: 'Gestão de Grupos',
      icon: <AiOutlineUnlock />
    },
    {
      label: 'Construção de Pag.',
      icon: <AiOutlineDesktop />
    },
    {
      label: 'Integração',
      icon: <AiOutlineApartment />
    },
    {
      label: 'Outros',
      icon: <AiOutlineSetting />
    }
  ];

  return (
    <div className={className}>
      <Container className='__container'>
        <div className='__categories'>
          {categories.map((category, index) => (
            <div key={index} className='categories__item'>
              <div className='item__icon'>{category.icon}</div>
              <div className='item__label'>
                <Typography weight='semibold' color='neutralColor.low.medium'>
                  {category.label}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default styled(HomeCategories)(
  ({ theme }) => css`
    .__container {
      padding: ${theme.spacing.md} 0;
    }

    .__categories {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;

      .categories__item {
        transition: 0.3s;
        cursor: pointer;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: ${theme.border.radius.sm};
        min-width: 200px;
        min-height: 150px;

        &:hover {
          background-color: white;
          box-shadow: ${theme.shadow.level[1]};
        }

        .item__icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: ${theme.brandColor.primary.pure};
        }
      }
    }
  `
);
