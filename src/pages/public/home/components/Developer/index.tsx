import { AiOutlineQuestionCircle, AiOutlineApi } from 'react-icons/ai';

import styled, { css, StyledProp } from '@eduzz/houston-styles';
import Button from '@eduzz/houston-ui/Button';
import Card from '@eduzz/houston-ui/Card';
import Grid from '@eduzz/houston-ui/Grid';
import Typography from '@eduzz/houston-ui/Typography';

const { Container, Row, Column } = Grid;

function HomeDeveloper({ className }: StyledProp) {
  return (
    <div className={className}>
      <Container className='__container'>
        <div className='__items'>
          <Row spacing='xxs'>
            <Column>
              <Card padding='sm' className='item__full'>
                <Typography.Heading as='h4' marginBottom>
                  Eduzz Store, é diferente!
                </Typography.Heading>

                <Typography as='h4' color='neutralColor.low.medium' lineHeight='lg'>
                  Se você é desenvolvedor de software e empreendedor, entenda como você pode disponibilizar seu App ou
                  Plugin para todo nosso ecossistema.
                </Typography>

                <div className='item__image'>
                  <img src='/home/api.jpg' alt='Api' />
                </div>

                <div className='item__cta'>
                  <Button fullWidth variant='outlined'>
                    Saiba mais
                  </Button>
                </div>
              </Card>
            </Column>

            <Column>
              <Row spacing='md'>
                <Column>
                  <Card padding='sm' className='item__half'>
                    <Typography.Heading as='h4' marginBottom>
                      Programa de parceiros
                    </Typography.Heading>
                    <Typography as='h4' color='neutralColor.low.medium' lineHeight='lg'>
                      O programa de parceiros de integração da Eduzz Stores esta em desenvolvimento. No momento estamos
                      validando ideias, formatos e benefícios com parceiros selecionados.
                    </Typography>
                    <div className='item__cta'>
                      <Button variant='outlined'>Saiba mais</Button>
                    </div>
                  </Card>
                </Column>
              </Row>

              <Row spacing='md'>
                <Column>
                  <Card padding='sm' className='item__half'>
                    <Typography.Heading as='h4' marginBottom>
                      Precisa de ajuda?
                    </Typography.Heading>
                    <Typography as='h4' color='neutralColor.low.medium' lineHeight='lg'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident architecto iusto tenetur.
                    </Typography>

                    <div className='item__help'>
                      <div className='help__item'>
                        <Button variant='outlined' startIcon={<AiOutlineQuestionCircle />}>
                          Suporte
                        </Button>
                      </div>

                      <div className='help__item'>
                        <Button variant='outlined' startIcon={<AiOutlineApi />}>
                          Documentação da API
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Column>
              </Row>
            </Column>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default styled(HomeDeveloper)(
  ({ theme }) => css`
    .__container {
      padding: ${theme.spacing.xxl} 0 ${theme.spacing.giant} 0;
      width: 1000px;
      max-width: 100%;
    }

    .__items {
      .item__full,
      .item__half {
        box-shadow: ${theme.shadow.level[2]};
        border: 0;
      }

      .item__full {
        height: auto;

        .item__image {
          img {
            width: 100%;
          }
        }
      }

      .item__half {
        width: 100%;
        height: 320.5px;

        .item__cta {
          margin-top: 2rem;
        }

        .item__help {
          display: flex;
          margin-top: 2rem;
          gap: 1rem;
        }
      }
    }
  `
);
