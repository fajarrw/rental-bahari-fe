// Hook ini dipake buat convert input image ke base64 string biar bisa
// disimpen ke database. Contoh pakenya ada di /admin/dashboard/car/add
// di dalam function handleFileChange()

export const useImage = (event, callback) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const base64Image = event.target.result;
            callback(base64Image)
        }
        reader.readAsDataURL(file);
    }
};