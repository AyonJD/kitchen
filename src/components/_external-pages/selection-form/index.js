import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function SelectionForm() {
    const [formData, setFormData] = useState({
        category: '',
        product: '',
        number: '',
        staff: '',
        numCustomers: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // You can perform further actions here, such as submitting the form data
    };

    return (
        <Box sx={{ p: 4 }}>
            <Paper sx={{ p: 4 }}>
                <Typography variant="h5" mb={4}>
                    Form
                </Typography>
                <form >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel>Category</InputLabel>
                                <Select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="category1">Category 1</MenuItem>
                                    <MenuItem value="category2">Category 2</MenuItem>
                                    <MenuItem value="category3">Category 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel>Product</InputLabel>
                                <Select
                                    name="product"
                                    value={formData.product}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="product1">Product 1</MenuItem>
                                    <MenuItem value="product2">Product 2</MenuItem>
                                    <MenuItem value="product3">Product 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel>Number</InputLabel>
                                <Select
                                    name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel>Staff</InputLabel>
                                <Select
                                    name="staff"
                                    value={formData.staff}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="staff1">Staff 1</MenuItem>
                                    <MenuItem value="staff2">Staff 2</MenuItem>
                                    <MenuItem value="staff3">Staff 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel>Number of Customers</InputLabel>
                                <Select
                                    name="numCustomers"
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
                    <Button type="submit" variant="contained" color="primary" mt={4}>
                        Submit
                    </Button>
                </form>
            </Paper>
        </Box>
    )
}