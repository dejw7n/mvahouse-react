import React from 'react';

export function getApartment() {
    $stmt = $this -> connect() -> query("SELECT * FROM apartments WHERE link = '$link'");

    $arr = array();
    $jsonArr = "{}";
    $jsonArr = json_encode($jsonArr);

    $row = $stmt -> fetch();

    if ($stmt -> rowCount()) {
        $arr += array
            (
                "id" => $row['id'],
                "link" => $row['link'],
                "title" => $row['title'],
                "configuration" => $row['configuration'],
                "price" => $row['price'],
                "discount" => $row['discount'],
                "createdAt" => $row['createdAt'],
                "updatedAt" => $row['updatedAt']
            );
        $jsonArr = json_encode($arr);
    } else {
        return null;
    }
    return $jsonArr;
}
