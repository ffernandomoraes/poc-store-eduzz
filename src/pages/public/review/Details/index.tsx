/* eslint-disable max-lines */
import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import HomeOutline from '@eduzz/houston-icons/HomeOutline';
import styled, { css, StyledProp } from '@eduzz/houston-styles';
import Breadcrumb from '@eduzz/houston-ui/Breadcrumb';
import Button from '@eduzz/houston-ui/Button';
import Divider from '@eduzz/houston-ui/Divider';
import Grid from '@eduzz/houston-ui/Grid';
import Typography from '@eduzz/houston-ui/Typography';

const { Container, Row, Column } = Grid;

function Details({ className }: StyledProp) {
  return (
    <div className={className}>
      <Container>
        <Breadcrumb className='__breacrumb'>
          <Breadcrumb.Link href='/' icon={<HomeOutline />} />
          <Breadcrumb.Link href='/apps'>Aplicativos</Breadcrumb.Link>
          <Breadcrumb.Item isActive>Review</Breadcrumb.Item>
        </Breadcrumb>

        <div className='__app'>
          <div className='app__image'>
            <Image src='/apps/nutror.png' width={200} height={200} />
          </div>

          <div className='app__details'>
            <Typography size='xxs' weight='semibold' color='primary'>
              Área de membros
            </Typography>

            <Typography.Heading size='lg' weight='semibold'>
              Nutror
            </Typography.Heading>

            <Typography size='xs' color='neutralColor.low.medium' marginBottom>
              Simples. Confiável. Privado.
            </Typography>

            <div className='app__rate'>
              <div className='rate__stars'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <div className='rate__total'>
                <Typography size='xxxs' weight='regular' color='neutralColor.low.medium'>
                  (4.1)
                </Typography>
              </div>
            </div>

            <div className='details__cta'>
              <Button>Saiba mais</Button>
            </div>
          </div>
        </div>

        <div className='__images'>
          <div className='images__item'>
            <img src='https://via.placeholder.com/350x550' alt='Preview' />
          </div>

          <div className='images__item'>
            <img src='https://via.placeholder.com/350x550' alt='Preview' />
          </div>

          <div className='images__item'>
            <img src='https://via.placeholder.com/350x550' alt='Preview' />
          </div>

          <div className='images__item'>
            <img src='https://via.placeholder.com/350x550' alt='Preview' />
          </div>
        </div>

        <Divider />

        <div className='__resume'>
          A ponte perfeita entre o que você sabe e o que as pessoas precisam aprender. O Nutror te ajuda a transformar
          vidas através da educação, te conectando ainda mais aos seus alunos. Hospede seus conteúdos, certifique e
          ofereça novas jornadas de aprendizado para seus estudantes.
          <br /> <br />
          Com a Nutror, você:
          <ul>
            <li>Organiza e entrega seu conteúdo, videoaulas, e-books, áudios de forma estratégica.</li>
            <li>Gerencia seus cursos, módulos e aulas, assim como seus alunos.</li>
            <li>Pode conversar e oferecer mentoria seus alunos através da gestão de comentários.</li>
            <li>Vende novos produtos para seus alunos com apenas 1 clique.</li>
            <li>Protege seu conteúdo contra pirataria.</li>
            <li>Cria certificados inteligentes e regras de entrega.</li>
            <li>Integração via APIs para automações.</li>
          </ul>
        </div>

        <Divider />

        <div className='__rating'>
          <Typography size='sm' weight='semibold'>
            Avaliações e opiniões
          </Typography>

          <Typography size='xxs' color='neutralColor.low.medium'>
            4.1 de 5.0
          </Typography>

          <div className='rating__rate'>
            {new Array(4).fill('').map((_, index) => (
              <div key={index} className='rate__item'>
                <div className='rate__stars'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>

                <Typography weight='semibold' size='xs' color='neutralColor.low.dark' marginBottom>
                  John Doe, 09/09/2022
                </Typography>

                <Typography size='xxs' color='neutralColor.low.medium'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non recusandae est quo hic quis veniam, harum
                  eligendi voluptates dolor excepturi nobis quaerat? Non amet quae in ab dolorem expedita quis.
                </Typography>
              </div>
            ))}
          </div>

          <div className='rating__cta'>
            <Button variant='outlined'>Ver mais avaliações</Button>
          </div>
        </div>

        <Divider />

        <div className='__related'>
          <Typography size='sm' weight='semibold'>
            Outros apps do desenvolvedor
          </Typography>

          <div className='related__items'>
            <Row>
              {new Array(4).fill('').map((_, index) => (
                <Column key={index} sm={3}>
                  <div className='related__item'>
                    <div className='item__image'>
                      <Image src='/apps/checkout.png' width={60} height={60} />
                    </div>

                    <div className='item__details'>
                      <Typography weight='semibold' size='xs' color='neutralColor.low.dark'>
                        Checkout Sun
                      </Typography>

                      <Typography size='xxs' color='neutralColor.low.medium'>
                        Venda mais. Muito mais.
                      </Typography>
                    </div>
                  </div>
                </Column>
              ))}
            </Row>
          </div>
        </div>

        <Divider />

        <div className='__info'>
          <Typography size='sm' weight='semibold'>
            Informações
          </Typography>

          <div className='info__items'>
            <Row>
              <Column>
                <Typography size='xs' color='neutralColor.low.dark'>
                  Desenvolvedor
                </Typography>
                <Typography size='xxs' color='primary'>
                  Eduzz
                </Typography>
              </Column>

              <Column>
                <Typography size='xs' color='neutralColor.low.dark'>
                  Categoria
                </Typography>
                <Typography size='xxs' color='primary'>
                  Área de membros
                </Typography>
              </Column>

              <Column>
                <Typography size='xs' color='neutralColor.low.dark'>
                  Idiomas
                </Typography>
                <Typography size='xxs' color='neutralColor.low.medium'>
                  Português e mais 2.
                </Typography>
              </Column>

              <Column>
                <Typography size='xs' color='neutralColor.low.dark'>
                  Suporte
                </Typography>
                <Typography size='xxs' color='neutralColor.low.medium'>
                  suporte@nutror.com
                </Typography>
              </Column>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default styled(Details)`
  ${({ theme }) => css`
    padding: ${theme.spacing.inset.lg};

    .__breacrumb {
      margin-bottom: 2rem;
    }

    .__app {
      display: flex;
      align-items: center;

      .app__image {
        margin-right: 2rem;
      }

      .app__rate {
        display: flex;
        align-items: center;

        .rate__stars {
          margin-right: 0.5rem;
          color: ${theme.feedbackColor.warning.medium};
          line-height: 0;
        }
      }

      .app__details {
        .details__cta {
          margin-top: 1rem;
        }
      }
    }

    .__images {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 3rem 0;

      .images__item {
        img {
          max-width: 100%;
          border-radius: ${theme.border.radius.md};
        }
      }
    }

    .__resume {
      margin: 3rem 0;
      color: ${theme.neutralColor.low.medium};
      font-size: ${theme.font.size.xs};

      ul {
        list-style-type: none;
        margin-top: 0.5rem;

        li {
          &::before {
            content: '-';
            margin-left: 1rem;
            margin-right: 0.5rem;
          }
        }
      }
    }

    .__rating {
      margin: 3rem 0;

      .rating__rate {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;

        .rate__item {
          padding: 1.5rem;
          border-radius: ${theme.border.radius.sm};
          border: 1px solid ${theme.neutralColor.high.medium};

          .rate__stars {
            margin-bottom: 1rem;
            color: ${theme.feedbackColor.warning.pure};
          }
        }
      }

      .rating__cta {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1.5rem;
      }
    }

    .__related {
      margin: 3rem 0;

      .related__items {
        margin-top: 2rem;

        .related__item {
          cursor: pointer;
          padding: 1.5rem;
          border-radius: ${theme.border.radius.sm};
          border: 1px solid ${theme.neutralColor.high.medium};
          display: flex;
          align-items: center;
          transition: 0.3s;

          &:hover {
            background-color: white;
          }

          .item__image {
            margin-right: 1rem;
          }
        }
      }
    }

    .__info {
      margin: 3rem 0;

      .info__items {
        margin-top: 2rem;
      }
    }
  `}
`;
