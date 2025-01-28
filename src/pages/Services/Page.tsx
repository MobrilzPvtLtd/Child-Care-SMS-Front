import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Switch,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { styled } from "@mui/system";
import { FaCheck, FaCrown, FaStar } from "react-icons/fa";
import Layout from "../../UI/Layout/Layout";
import { Link } from "react-router-dom";

interface Plan {
  title: string;
  price: number;
  features: string[];
  icon: any;
  isPro?: boolean;
}

interface StyledCardProps {
  isPro?: boolean;
}

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "isPro",
})<StyledCardProps>(({ isPro }) => ({
  borderRadius: 20,
  height: "100%",
  backgroundColor: isPro ? "var(--primary-background-color)" : "#212121",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
  },
}));

const Page: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const plans: Plan[] = [
    {
      title: "Beginner",
      price: isYearly ? 99 : 9.99,
      features: ["10 parents", "5 Teachers", "5 Classes", "Basic Analytics"],
      icon: <FaStar />,
    },
    {
      title: "Intermediate",
      price: isYearly ? 199 : 19.99,
      features: ["15 parents", "8 Teachers", "8 Classes", "Advanced Analytics"],
      icon: <FaStar />,
    },
    {
      title: "Pro",
      price: isYearly ? 299 : 29.99,
      features: [
        "20 parents",
        "10 Teachers",
        "10 Classes",
        "Custom Analytics Dashboard",
      ],
      icon: <FaCrown />,
      isPro: true,
    },
  ];

  return (
    <Layout>
      <Box
        sx={{
          minHeight: "95vh",
          backgroundColor: "#fff",
          py: 8,
          px: { xs: 2, md: 6 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 6,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: "bold", color: "#000" , textAlign: "center" ,width: "100%"}}
          >
            Pricing Options
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography sx={{ color: "#000", fontWeight: 700 }}>
              Monthly
            </Typography>
            <Switch
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
              color="primary"
              inputProps={{ "aria-label": "toggle pricing period" }}
            />
            <Typography sx={{ color: "#000", fontWeight: 700 }}>
              Yearly
            </Typography>
          </Box>
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          // spacing={4}
          justifyContent={{ xl: "center"}}
          alignItems="stretch"
          flexWrap="wrap"
          gap="1rem"
        >
          {plans.map((plan) => (
            <Box
              key={plan.title}
              sx={{
                flex: 1,
                maxWidth: { xs: "100%", md: "350px" },
              }}
            >
              <StyledCard sx={{backgroundColor : "var(--primary-background-color)" }} isPro={plan.isPro}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    p: 4,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        color: plan.isPro ? "#ffd700" : "#fff",
                        fontSize: "2rem",
                      }}
                    >
                      {plan.icon}
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      {plan.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold", color: "#fff", mb: 3 }}
                  >
                    ${plan.price}
                    <Typography
                      component="span"
                      sx={{ fontSize: "1rem", color: "#bbb" }}
                    >
                      /{isYearly ? "year" : "month"}
                    </Typography>
                  </Typography>

                  <List sx={{ flexGrow: 1, mb: 3 }}>
                    {plan.features.map((feature) => (
                      <ListItem key={feature} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <FaCheck style={{ color: "#4caf50" }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          sx={{ color: "#fff" }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Link
                    to="/register"
                    className="flex justify-center items-center"
                  >
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        mt: "auto",
                        backgroundColor: plan.isPro ? "#d6d6ff" : "#d6d6ff",
                        transition: "all .3s ease-in-out",
                        color: "#000",
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: "#fff",
                          scale: 1.05,
                        },
                      }}
                    >
                      Get Now
                    </Button>
                  </Link>
                </CardContent>
              </StyledCard>
            </Box>
          ))}
        </Stack>
      </Box>
    </Layout>
  );
};

export default Page;
