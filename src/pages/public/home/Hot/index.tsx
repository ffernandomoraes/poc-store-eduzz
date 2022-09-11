import Image from 'next/image';
import Link from 'next/link';

import styled, { css, StyledProp } from '@eduzz/houston-styles';
import Button from '@eduzz/houston-ui/Button';
import Grid from '@eduzz/houston-ui/Grid';
import Typography from '@eduzz/houston-ui/Typography';

function HomeHot({ className }: StyledProp) {
  const apps = [
    {
      name: 'Nutror',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut condimentum arcu, non',
      image: '/apps/nutror.png',
      tag: 'Área de membros'
    },
    {
      name: 'Safe Vídeo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut condimentum arcu, non',
      image: '/apps/safevideo.png',
      tag: 'Conversão'
    },
    {
      name: 'Checkout Sun',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut condimentum arcu, non',
      image: '/apps/checkout.png',
      tag: 'Pagamentos'
    },
    {
      name: 'Select',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut condimentum arcu, non',
      image: '/apps/select.png',
      tag: 'Conversão'
    },
    {
      name: 'Redirect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut condimentum arcu, non',
      image: '/apps/redirect.png',
      tag: 'Conversão'
    },
    {
      name: 'Foguete',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut condimentum arcu, non',
      image: '/apps/foguete.png',
      tag: 'Conversão'
    }
  ];

  return (
    <div className={className}>
      <Grid.Container className='__container'>
        <div className='__hot'>
          <div className='apps__title'>
            <Typography.Heading as='h3' weight='bold' color='neutralColor.low.medium' marginBottom>
              Em alta
            </Typography.Heading>
          </div>

          <div className='apps__list'>
            {apps.sort().map((app, index) => (
              <Link key={`app-${index}`} href='/review'>
                <div className='apps__item'>
                  <div className='item__number'>
                    <span>
                      <Typography size='xxxs' weight='bold' color='neutralColor.low.medium'>
                        #{index + 1}
                      </Typography>
                    </span>
                  </div>

                  <div className='item__content'>
                    <div className='item__image'>
                      <Image src={app.image} width={100} height={100} />
                    </div>

                    <div className='item__details'>
                      <Typography size='xs' weight='semibold' marginBottom>
                        {app.name}
                      </Typography>

                      <Typography size='xxs' weight='regular' color='neutralColor.low.medium' lineHeight='lg'>
                        {app.description}
                      </Typography>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className='apps__cta'>
            <Button variant='outlined'>Ver todos os apps</Button>
          </div>
        </div>
      </Grid.Container>
    </div>
  );
}

export default styled(HomeHot)(
  ({ theme }) => css`
    overflow: hidden;

    .__container {
      padding: ${theme.spacing.xl} 0;
    }

    .__hot {
      .apps__title {
        width: 100%;
        text-transform: uppercase;
        margin-bottom: 1.5rem;

        h3 {
          font-size: 0.75rem;
        }
      }

      .apps__list {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;

        .apps__item {
          position: relative;
          cursor: pointer;
          padding: ${theme.spacing.xs};
          border-radius: ${theme.border.radius.sm};
          box-shadow: ${theme.shadow.level[2]};
          transition: all 0.3s;
          flex-basis: calc(33.3% - 1rem);
          display: flex;
          flex-wrap: wrap;
          min-width: 100px;

          &:hover {
            transform: scale(1.02);
          }

          .item__number {
            position: absolute;
            top: 1rem;
            right: 1rem;

            span {
              text-transform: uppercase;

              p {
                color: ${theme.brandColor.primary.pure};
              }
            }
          }

          .item__content {
            display: flex;
          }

          .item__image {
            margin-right: ${theme.spacing.xxs};
          }
        }
      }

      .apps__cta {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
        margin-top: ${theme.spacing.xl};
      }
    }
  `
);
