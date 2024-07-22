import { Box, CardContent, Typography } from '@mui/material';
import { TGuestDetails } from '../../../../services/guest/types';
import { CheckInBadge, StyledCard } from './GuestCard.style';

interface IGuestCardProps {
  guest: TGuestDetails;
}

const GuestCard = ({ guest }: IGuestCardProps) => {
  return (
    <StyledCard>
      {guest.isCheckedIn && (
        <CheckInBadge
          badgeContent="Checked In"
          color="primary"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        />
      )}
      <CardContent>
        <Typography variant="h6">Guest Details</Typography>
        <Box display="grid" gridTemplateRows="repeat(3, 1fr)" gap={1}>
          <Typography variant="body1">
            <strong>Name:</strong> {guest.name}
          </Typography>
          <Typography variant="body1">
            <strong>Guest Type:</strong> {guest.type}
          </Typography>
          <Typography variant="body1">
            <strong>ID:</strong> {guest.id}
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default GuestCard;
