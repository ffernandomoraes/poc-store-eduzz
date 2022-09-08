import Image from 'next/image';
import { AiOutlineStar, AiFillStar, AiOutlineSearch } from 'react-icons/ai';
import Slider, { Settings } from 'react-slick';

import styled, { css, StyledProp } from '@eduzz/houston-styles';
import Input from '@eduzz/houston-ui/Forms/Input';
import Grid from '@eduzz/houston-ui/Grid';
import Tag from '@eduzz/houston-ui/Tag';
import Typography from '@eduzz/houston-ui/Typography';

function HomeHero({ className }: StyledProp) {
  const apps = [
    {
      name: 'Nutror',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut condimentum arcu, non',
      image: '/apps/nutror.png',
      tag: 'Área de membros',
      rate: 4
    },
    {
      name: 'Safe Vídeo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut condimentum arcu, non',
      image: '/apps/safevideo.png',
      tag: 'Conversão',
      rate: 5
    },
    {
      name: 'Checkout Sun',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut condimentum arcu, non',
      image: '/apps/checkout.png',
      tag: 'Pagamentos',
      rate: 4.5
    },
    {
      name: 'Select',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut condimentum arcu, non',
      image: '/apps/select.png',
      tag: 'Afiliados',
      rate: 5
    },
    {
      name: 'Redirect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut condimentum arcu, non',
      image: '/apps/redirect.png',
      tag: 'Conversão',
      rate: 4
    },
    {
      name: 'Foguete',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut condimentum arcu, non',
      image: '/apps/foguete.png',
      tag: 'Conversão',
      rate: 5
    },
    {
      name: 'Nutror',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut condimentum arcu, non',
      image: '/apps/nutror.png',
      tag: 'Área de membros',
      rate: 4
    },
    {
      name: 'Safe Vídeo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut condimentum arcu, non',
      image: '/apps/safevideo.png',
      tag: 'Conversão',
      rate: 5
    },
    {
      name: 'Checkout Sun',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut condimentum arcu, non',
      image: '/apps/checkout.png',
      tag: 'Pagamentos',
      rate: 4.5
    }
  ];

  const settings: Partial<Settings> = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    rows: 1,
    swipeToSlide: true
  };

  return (
    <div className={className}>
      <Grid.Container className='__wrapper'>
        <div className='__title'>
          <Typography.Heading as='h2' size='lg' weight='bold' marginBottom>
            Eduzz Store
          </Typography.Heading>
          <Typography.Heading size='md' weight='regular' lineHeight='xs'>
            O melhor lugar para você encontrar soluções para seu negócio!
          </Typography.Heading>
        </div>

        <div className='__search'>
          <div className='search__field'>
            <Input placeholder='O que você está precisando?' endAdornment={<AiOutlineSearch />} />
          </div>
          <div className='search__suggestion'>
            <Tag>Área de membros</Tag>
            <Tag>Checkout</Tag>
            <Tag>Afiliados</Tag>
            <Tag>Estatísticas</Tag>
          </div>
        </div>

        <div className='__apps'>
          <div className='apps__title'>
            <Typography.Heading as='h3' weight='bold' color='neutralColor.low.medium' marginBottom>
              Os mais procurados
            </Typography.Heading>
          </div>

          <div className='apps__list'>
            <Slider {...settings}>
              {apps.map((app, index) => (
                <div key={`app-${index}`}>
                  <div className='apps__item'>
                    <div className='item__image'>
                      <Image src={app.image} width={120} height={120} />
                    </div>

                    <div className='item__details'>
                      <Typography size='xs' weight='semibold' marginBottom>
                        {app.name}
                      </Typography>

                      <Typography size='xxs' weight='regular' color='neutralColor.low.medium' lineHeight='lg'>
                        {app.description}
                      </Typography>
                    </div>

                    <div className='item__rate'>
                      <div className='rate__stars'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                      </div>
                      <div className='rate__total'>
                        <Typography size='xxxs' weight='regular' color='neutralColor.low.medium'>
                          ({app.rate})
                        </Typography>
                      </div>
                    </div>

                    <div className='item__tag'>
                      <span>
                        <Typography size='xxxs' weight='bold' color='neutralColor.low.medium'>
                          {app.tag}
                        </Typography>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Grid.Container>
    </div>
  );
}

export default styled(HomeHero)(
  ({ theme }) => css`
    overflow: hidden;

    .__wrapper {
      padding: ${theme.spacing.xl} 0 ${theme.spacing.xl} 0;
    }

    .__title {
      max-width: 700px;
      text-align: center;
      margin: 0 auto;
      margin-bottom: ${theme.spacing.xs};
    }

    .__search {
      max-width: 700px;
      margin: 0 auto;
      margin-bottom: ${theme.spacing.xxl};

      .search__field {
        margin-bottom: 1rem;
      }

      .search__suggestion {
        display: flex;
        gap: 0.75rem;
      }
    }

    .__apps {
      .slick-list {
        overflow: inherit;
      }

      .apps__title {
        width: 100%;
        text-transform: uppercase;

        h3 {
          font-size: 0.75rem;
        }
      }

      .apps__list {
        margin-left: -0.8rem;

        .apps__item {
          margin: 0.8rem;
          background-color: ${theme.neutralColor.high.pure};
          padding: ${theme.spacing.xs};
          border-radius: ${theme.border.radius.sm};
          box-shadow: ${theme.shadow.level[2]};
          transition: all 0.3s;

          &:hover {
            transform: scale(1.02);
          }

          .item__image {
            margin-bottom: ${theme.spacing.xxs};
          }

          .item__rate {
            margin-top: 1rem;
            display: flex;
            align-items: center;

            .rate__stars {
              margin-right: 0.5rem;
              color: ${theme.feedbackColor.warning.medium};
              line-height: 0;
            }
          }

          .item__tag {
            margin-top: ${theme.spacing.xxs};

            span {
              text-transform: uppercase;

              p {
                color: ${theme.brandColor.primary.pure};
              }
            }
          }
        }
      }
    }
  `
);
