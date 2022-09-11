import styled, { css, StyledProp } from '@eduzz/houston-styles';
import Grid from '@eduzz/houston-ui/Grid';
import Typography from '@eduzz/houston-ui/Typography';

function Footer({ className }: StyledProp) {
  return (
    <footer className={className}>
      <Grid.Container>
        <Grid.Row>
          <Grid.Column xs={12} sm={8}>
            <div className='footer__logo'>
              <div className='logo__image'>
                <img src='http://eduzz-houston.s3.amazonaws.com/topbar/logos/eduzz-colored.svg' alt='Logo Eduzz' />
              </div>

              <div className='logo__copy'>
                <Typography color='neutralColor.low.medium' size='xxs'>
                  Eduzz Store - Todos os direitos reservados.
                </Typography>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column xs={12} sm={2}>
            <div className='footer__category'>
              <Typography color='neutralColor.low.dark' weight='bold' size='xxxs' as='h5'>
                Categorias
              </Typography>

              <ul>
                <li>
                  <a href=''>
                    <Typography color='neutralColor.low.dark' size='xxs'>
                      Área de Membros
                    </Typography>
                  </a>
                </li>

                <li>
                  <a href=''>
                    <Typography color='neutralColor.low.dark' size='xxs'>
                      Finanças
                    </Typography>
                  </a>
                </li>

                <li>
                  <a href=''>
                    <Typography color='neutralColor.low.dark' size='xxs'>
                      Produtividade
                    </Typography>
                  </a>
                </li>

                <li>
                  <a href=''>
                    <Typography color='neutralColor.low.dark' size='xxs'>
                      Segurança
                    </Typography>
                  </a>
                </li>
              </ul>
            </div>
          </Grid.Column>

          <Grid.Column xs={12} sm={2}>
            <div className='footer__links'>
              <Typography color='neutralColor.low.dark' weight='bold' size='xxxs' as='h5'>
                Links úteis
              </Typography>

              <ul>
                <li>
                  <a href=''>
                    <Typography color='neutralColor.low.dark' size='xxs'>
                      Políticas de Privacidade
                    </Typography>
                  </a>
                </li>

                <li>
                  <a href=''>
                    <Typography color='neutralColor.low.dark' size='xxs'>
                      Termos de uso
                    </Typography>
                  </a>
                </li>

                <li>
                  <a href=''>
                    <Typography color='neutralColor.low.dark' size='xxs'>
                      Login
                    </Typography>
                  </a>
                </li>

                <li>
                  <a href=''>
                    <Typography color='neutralColor.low.dark' size='xxs'>
                      Suporte
                    </Typography>
                  </a>
                </li>
              </ul>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
    </footer>
  );
}

export default styled(Footer)`
  ${({ theme }) => css`
    background-color: ${theme.neutralColor.high.pure};
    border-top: 1px solid ${theme.neutralColor.high.medium};
    padding: ${theme.spacing.lg} 0;

    .footer__logo {
      .logo__image {
        margin-bottom: 1rem;

        img {
          max-width: 120px;
        }
      }
    }

    .footer__category,
    .footer__links {
      h5 {
        text-transform: uppercase;
      }

      ul {
        list-style: none;
        margin-top: 1rem;

        li {
          display: block;
          margin-bottom: 0.5rem;

          a {
            display: inline-flex;
          }
        }
      }
    }
  `}
`;
