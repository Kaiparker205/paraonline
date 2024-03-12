import React from 'react';
import { Grid, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { LocalPharmacy, LocalShipping, Payment, Support } from '@mui/icons-material';

const services = [
  {
    title: 'Parapharmacy Online',
    description: 'Shop for health and wellness products that do not require a prescription, such as vitamins, supplements, cosmetics, personal care, and hygiene items.',
    icon: <LocalPharmacy />,
    link: '/parapharmacy',
  },
  {
    title: 'Free Delivery',
    description: 'Enjoy free and fast delivery for orders over $50. We deliver to your doorstep or any convenient location within 24 hours.',
    icon: <LocalShipping />,
    link: '/delivery',
  },
  {
    title: 'Secure Payment',
    description: 'Pay securely and easily with your preferred payment method, such as credit card, debit card, PayPal, or cash on delivery.',
    icon: <Payment />,
    link: '/payment',
  },
  {
    title: 'Customer Support',
    description: 'Contact us anytime for any questions or feedback. We are available 24/7 via phone, email, or chat.',
    icon: <Support />,
    link: '/support',
  },
];

const Services = () => {
  return (
    <section>
      <h1>Services</h1>
      <Grid container spacing={2}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.title}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {service.icon} {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={service.link}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Services;
