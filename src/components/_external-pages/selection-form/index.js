import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material'

export default function SelectionForm({
  renderExtraField,
  dynamicField,
  header,
  formData,
  setFormData,
  handleSubmit,
}) {
  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <Paper sx={{ p: 0 }}>
      <Typography variant="h5" mb={4} sx={header && { textAlign: 'center' }}>
        {header || 'Form'}
      </Typography>
      <Box sx={{ maxWidth: '100%' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                <InputLabel>Food Category</InputLabel>
                <Select
                  name="category"
                  label="Food Category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <MenuItem value="Breakfast Items">Breakfast Items</MenuItem>
                  <MenuItem value="Lunch Packages">Lunch Packages</MenuItem>
                  <MenuItem value="Dinner Packages">Dinner Packages</MenuItem>
                  <MenuItem value="Snacks">Snacks</MenuItem>
                  <MenuItem value="Drinks">Drinks</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                <InputLabel>Food Item</InputLabel>
                <Select
                  name="product"
                  label="Food Item"
                  value={formData.product}
                  onChange={handleChange}
                >
                  <MenuItem value="Sandwich">Sandwich</MenuItem>
                  <MenuItem value="Cheese Cake">Cheese Cake</MenuItem>
                  <MenuItem value="Chocolate Muffin">Chocolate Muffin</MenuItem>
                  <MenuItem value="Pasta">Pasta</MenuItem>
                  <MenuItem value="Corn Soup">Corn Soup</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                <InputLabel>Number</InputLabel>
                <Select
                  name="number"
                  label="Number"
                  value={formData.number}
                  onChange={handleChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {renderExtraField && (
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                  <TextField
                    name="note"
                    label="Note"
                    value={formData.note}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
            )}
            <Grid item xs={renderExtraField ? 6 : 12}>
              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                <InputLabel>{dynamicField}</InputLabel>
                <Select
                  name={renderExtraField ? 'tableNumber' : 'staff'}
                  value={
                    renderExtraField ? formData.tableNumber : formData.staff
                  }
                  onChange={handleChange}
                  label={dynamicField}
                >
                  <MenuItem value={renderExtraField ? 'Table 1' : 'Mamun'}>
                    {dynamicField === 'Assigned Staff'
                      ? 'Mamun'
                      : dynamicField + ' 1'}
                  </MenuItem>
                  <MenuItem value={renderExtraField ? 'Table 2' : 'Rashed'}>
                    {dynamicField === 'Assigned Staff'
                      ? 'Rashed'
                      : dynamicField + ' 2'}
                  </MenuItem>
                  <MenuItem value={renderExtraField ? 'Table 3' : 'Shahin'}>
                    {dynamicField === 'Assigned Staff'
                      ? 'Shahin'
                      : dynamicField + ' 3'}
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                <InputLabel>Number of Customers</InputLabel>
                <Select
                  name="numCustomers"
                  label="Number of Customers"
                  value={formData.numCustomers}
                  onChange={handleChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 4 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Paper>
  )
}
