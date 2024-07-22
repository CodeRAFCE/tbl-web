import { Badge, Card } from "@mui/material";
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
  marginTop: '5rem', 
  padding: theme.spacing(2),
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  width: '90%',
}));

export const CheckInBadge = styled(Badge)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  zIndex: 1,
}));