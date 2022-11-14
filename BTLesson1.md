    2. Es6
        - Map: Từ 1 mảng cũ, tạo ra 1 mảng mới dựa trên việc thực thi 1 hàm lên từng phần tử của mảng cũ mà ko làm thay đổi nó
                const array = [1, 4, 9, 16];
                const map = array.map(function(item) {
                    return item * item;
                });

        - Filter: Tạo ra 1 mảng mới, lọc ra các phần tử trong mảng thoả mãn 1 điều kiện trước đó
                const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
                const result = words.filter((word)=> {
                    return word.length > 4;
                });
        - Reduce: Trả về kết quả là 1 giá trị từ việc thực thi 1 hàm lên các phần tử của mảng, với 1 giá trị tích luỹ
                    const data = [2, 11, 15, 25, 35];
                    const res = data.reduce((total,currentValue) => {
                        return total + currentValue;
                    });
        - Some:  some trong js có nhiệm vụ lặp qua tất cả các phần tử của mảng, mỗi lần lặp nó sẽ truyền giá trị của phần tử đang lặp vào hàm callback. Chỉ cần hàm callback return true là hàm some sẽ return true. Ngược lại, nếu duyệt hết mảng mà không có return true nào thì hàm some sẽ return false.
        - Every: kiểm tra tất cả các phần tử trong mảng có thõa mãn một điều kiện nào đó hay không. Nếu tất cả phần tử đều thỏa thì sẽ trả về true, ngược lại nếu chỉ cần một phần tử không thỏa thôi là nó sẽ trả về false
        - Find: trả về giá trị đầu tiên của mảng thoả mãn 1 điều kiện cho trước 
                const array = [2, 12, 8, 130, 44];
                const found = array.find((num)=> {
                    return element > 10;
                });
        - findIndex: trả về index của phần tử đầu tiên trong mảng thỏa mãn được điều kiện kiểm tra
        - for with index (for(let i = 0; i < nums.lentgh ; i++)): lặp qua mảng lần lượt với index tăng dần
        - for in
        - for of
        - for each
    
    3. Spread operator (...): Spread operator là ba dấu chấm ( ...), có thể chuyển đổi một mảng thành một chuỗi các tham số được phân tách bằng dấu phẩy
    4. String template (literals string): Template literal là một cú pháp mới, giúp chúng ta dễ dàng thực hiện các thao tác nối chuỗi trên nhiều dòng. Với template literal, chúng ta có thể dễ dàng thêm các giá trị JS vào bên trong của một chuỗi ký tự mà không cần dùng phép nối chuỗi.    
    5. Arrow function
        - Có bao nhiêu loại function: 5 loại
        a, Function không có tham số và không trả về bất cứ giá trị gì
        b, Arrow function: arrow function có cú pháp ngắn hơn cú pháp function bình thường, nó có thể không có đối số
        c, Anonymous functions
        d,Function có một tham số và trả về một giá trị cụ thể
        e, Function lấy function như một tham số
        - Sự khác biệt giữa các loại function: function có tham số, function không có tham số, function không có tên
        - Tại sao ES6 arrow function  const getSum = (nums) => {} (bind, call, this)
            call: Gọi hàm và cho phép bạn truyền vào một object và các đối số phân cách nhau bởi dấu phẩy 
            blind: Trả về một hàm mới, cho phép bạn truyền vào một object và các đối số phân cách nhau bởi dấu phẩy.
            this : 
    6. Destructuring: cho phép bạn gán các thuộc tính của một Object hoặc một Array.
        - Object destructuring: tạo ra một hay nhiều  biến mới  sử dụng những property của một Objects
        - Array destructuring: tạo ra một biến mới  bằng cách sử dụng giá trị mỗi index của Array
    7. Promise: cách tự tạo 1 cái promise, mỗi cái promise có state, cách handle promise => async/await, event-loop
        Promise: Promise là một cơ chế trong JavaScript giúp bạn thực thi các tác vụ bất đồng bộ mà không rơi vào callback hell hay pyramid of doom, là tình trạng các hàm callback lồng vào nhau ở quá nhiều tầng
        - Tạo nhanh Promise với Promise.resolve() và Promise.reject()
        - async/await là một cơ chế giúp bạn thực hiện các thao tác bất đồng bộ một cách tuần tự
    8. Class: Class là một template giúp định nghĩa cách hoạt động của các object thuộc class đó